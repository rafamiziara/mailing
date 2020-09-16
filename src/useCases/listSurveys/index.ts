import { Request, Response } from 'express';

import { User } from '../../entities/User';
import { mongooseSurveysRepository } from '../../repositories/implementations/MongooseSurveysRepository';

class ListSurveysController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = req.currentUser as User;

      const surveys = await mongooseSurveysRepository.getSurveysByUserId(user.id);

      return res.status(201).send(surveys);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

const listSurveysController = new ListSurveysController();

export { listSurveysController };
