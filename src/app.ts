import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import passport from 'passport';
import path from 'path';
import cookieParser from 'cookie-parser';

import './middlewares/passport';

import { currentUser } from './middlewares/currentUser';
import { errorHandler } from './middlewares/errorHandler';
import { router } from './routes';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(currentUser);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

app.use(errorHandler);

export { app };
