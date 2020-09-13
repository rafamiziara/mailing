import express from 'express';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import path from 'path';

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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assests
  // like our main.js, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

export { app };
