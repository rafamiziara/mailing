import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import cors from 'cors';

import './providers/passport';
import { secrets } from '@config/secrets';

import { NotFoundError } from './errors/NotFoundError';
import { router } from './routes';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(cors({
  origin: secrets.redirectDomain,
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [secrets.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.all('*', async () => {
  throw new NotFoundError();
});

export { app };
