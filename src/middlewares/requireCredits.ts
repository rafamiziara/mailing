import { Request, Response, NextFunction } from 'express';

export const requireCredits = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  return next();
};
