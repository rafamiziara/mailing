import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { secrets } from '@config/secrets';
import { User } from '@entities/User';
import { mongooseUsersRepository } from '../repositories/implementations/MongooseUsersRepository';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

export const currentUser = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.cookies?.accessToken) {
    return next();
  }

  try {
    const { id } = jwt.verify(req.cookies.accessToken, secrets.jwtKey) as User;
    req.currentUser = await mongooseUsersRepository.findById(id);
  } catch (err) {
    req.currentUser = null;
    console.error(err);
  }

  return next();
};
