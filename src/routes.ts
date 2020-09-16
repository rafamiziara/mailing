import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { secrets } from '@config/secrets';
import { User } from '@entities/User';
import { requireCredits } from './middlewares/requireCredits';
import { requireLogin } from './middlewares/requireLogin';

import { createChargeController } from './useCases/createCharge';
import { createSurveyController } from './useCases/createSurvey';
import { listSurveysController } from './useCases/listSurveys';
import { getFeedbackController } from './useCases/getFeedback';

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  const { credits, googleId, id } = req.user as User;
  const userJwt = jwt.sign({ credits, googleId, id }, secrets.jwtKey);

  res.cookie('jwt', userJwt).redirect(`${secrets.redirectDomain}/surveys`);
});

router.get('/api/logout', (req, res) => {
  res.clearCookie('jwt');
  res.redirect(`${secrets.redirectDomain}/`);
});

router.get('/api/current_user', (req, res) => {
  res.send(req.currentUser);
});

router.post('/api/stripe', requireLogin, createChargeController.handle);

router.get('/api/surveys/:surveyId/:choice', (req, res) => {
  res.send('Thanks for voting!');
});

router.get('/api/surveys', requireLogin, listSurveysController.handle);

router.post('/api/surveys/webhooks', getFeedbackController.handle);

router.post('/api/surveys', requireLogin, requireCredits, createSurveyController.handle);

export { router };
