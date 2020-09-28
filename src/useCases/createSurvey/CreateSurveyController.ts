import { Request, Response } from 'express';
import { User } from '@entities/User';
import { CreateSurveyUseCase } from './CreateSurveyUseCase';

export class CreateSurveyController {
  constructor(
    private createSurveyUseCase: CreateSurveyUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title, subject, question, recipients,
    } = req.body;

    const user = req.currentUser as User;

    try {
      const updatedUser = await this.createSurveyUseCase.execute({
        user,
        title,
        subject,
        question,
        recipients,
      });

      return res.status(201).json(updatedUser);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
