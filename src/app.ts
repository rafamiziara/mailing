import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';

import './providers/passport';

import { secrets } from '@config/secrets';

import { router } from './routes';

const app = express();
app.use(json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [secrets.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

export { app };
