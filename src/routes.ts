import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { secrets } from '@config/secrets';
import { User } from '@entities/User';
import { requireCredits } from './middlewares/requireCredits';
import { requireLogin } from './middlewares/requireLogin';

import { mongooseUsersRepository } from './repositories/implementations/MongooseUsersRepository';

import { createSurveyController } from './useCases/createSurvey';
import { listSurveysController } from './useCases/listSurveys';
import { getFeedbackController } from './useCases/getFeedback';
import { createChargeController } from './useCases/createCharge';

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  const { id } = req.user as User;
  const accessToken = jwt.sign({ id }, secrets.jwtKey);

  res.cookie('accessToken', accessToken);
  res.redirect(`${secrets.redirectDomain}/surveys`);
});

router.get('/api/logout', (req, res) => {
  res.clearCookie('accessToken');
  res.redirect(`${secrets.redirectDomain}/`);
});

router.get('/api/current_user', (req, res) => {
  res.send(req.currentUser);
});

router.post('/api/stripe', requireLogin, createChargeController.handle);

router.get('/api/stripe/success', requireLogin, async (req, res) => {
  const user = req.currentUser as User;
  await mongooseUsersRepository.addCredits(user.id, 5);
  res.redirect(`${secrets.redirectDomain}/surveys`);
});

router.get('/api/surveys/:surveyId/:choice', (req, res) => {
  res.send('Thanks for voting!');
});

router.get('/api/surveys', requireLogin, listSurveysController.handle);

router.post('/api/surveys/webhooks', getFeedbackController.handle);

router.post('/api/surveys', requireLogin, requireCredits, createSurveyController.handle);

export { router };
