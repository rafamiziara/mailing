import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/NotAuthorizedError';

export const requireLogin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    throw new NotAuthorizedError();
  }

  return next();
};
