import { Request, Response } from 'express';
import { User } from '@entities/User';
import { ListSurveysUseCase } from './ListSurveysUseCase';

export class ListSurveysController {
  constructor(
    private listSurveysUseCase: ListSurveysUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const user = req.currentUser as User;

    try {
      const surveys = await this.listSurveysUseCase.execute({ userId: user.id });

      return res.status(201).json(surveys);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
