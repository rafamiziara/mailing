import { Request, Response, NextFunction } from 'express';
import { User } from '@entities/User';

export const requireCredits = (req: Request, res: Response, next: NextFunction) => {
  const user = req.currentUser as User;

  if (user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  return next();
};
