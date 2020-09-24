import { Request, Response } from 'express';

import { User } from '../../entities/User';
import { mongooseSurveysRepository } from '../../repositories/implementations/MongooseSurveysRepository';

class DeleteSurveyController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { surveyId } = req.params;

      const user = req.currentUser as User;

      const survey = await mongooseSurveysRepository.getSurveyById(surveyId);

      if (survey._user !== user.id) {
        return res.status(422).json({
          message: 'Invalid request',
        });
      }

      await mongooseSurveysRepository.delete(surveyId);

      const surveys = await mongooseSurveysRepository.getSurveysByUserId(user.id);

      return res.status(201).send(surveys);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

const deleteSurveyController = new DeleteSurveyController();

export { deleteSurveyController };
