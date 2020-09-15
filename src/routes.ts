import express from 'express';
import passport from 'passport';

import { secrets } from '@config/secrets';
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
  res.set('user', req.user.toString());
  res.redirect(`${secrets.redirectDomain}/surveys`);
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect(`${secrets.redirectDomain}/`);
});

router.get('/api/current_user', (req, res) => {
  console.log('Current User', req.user);
  res.send(req.user);
});

router.post('/api/stripe', requireLogin, createChargeController.handle);

router.get('/api/surveys/:surveyId/:choice', (req, res) => {
  res.send('Thanks for voting!');
});

router.get('/api/surveys', requireLogin, (req, res) => {
  console.log('Api Surveys', req.user);
  return listSurveysController.handle(req, res);
});

router.post('/api/surveys/webhooks', getFeedbackController.handle);

router.post('/api/surveys', requireLogin, requireCredits, createSurveyController.handle);

export { router };
