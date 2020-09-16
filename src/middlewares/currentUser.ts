import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { secrets } from '@config/secrets';
import { User } from '@entities/User';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(req.cookies.jwt, secrets.jwtKey) as User;
    req.currentUser = payload;
  } catch (err) {
    req.currentUser = null;
    console.error(err);
  }

  return next();
};
