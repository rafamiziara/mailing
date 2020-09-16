import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import './providers/passport';
import { secrets } from '@config/secrets';

import { currentUser } from './middlewares/currentUser';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './errors/NotFoundError';
import { router } from './routes';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: secrets.redirectDomain,
  credentials: true,
}));

app.use(currentUser);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
