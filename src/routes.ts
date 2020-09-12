import express from 'express';
import passport from 'passport';

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
  res.redirect('/surveys');
});

router.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

router.post('/api/stripe', requireLogin, createChargeController.handle);

router.get('/api/surveys/:surveyId/:choice', (req, res) => {
  res.send('Thanks for voting!');
});

router.get('/api/surveys', requireLogin, listSurveysController.handle);

router.post('/api/surveys/webhooks', getFeedbackController.handle);

router.post('/api/surveys', requireLogin, requireCredits, createSurveyController.handle);

export { router };
