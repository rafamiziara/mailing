import { Request, Response } from 'express';
import { User } from '@entities/User';
import { DeleteSurveyUseCase } from './DeleteSurveyUseCase';

export class DeleteSurveyController {
  constructor(
    private deleteSurveyUseCase: DeleteSurveyUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { surveyId } = req.params;
    const user = req.currentUser as User;

    try {
      const surveys = await this.deleteSurveyUseCase.execute({
        surveyId,
        userId: user.id,
      });

      return res.status(201).json(surveys);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
