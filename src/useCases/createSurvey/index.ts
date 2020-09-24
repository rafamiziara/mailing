import { Request, Response } from 'express';

import { Survey } from '../../entities/Survey';
import { User } from '../../entities/User';
import { mongooseSurveysRepository } from '../../repositories/implementations/MongooseSurveysRepository';
import { mongooseUsersRepository } from '../../repositories/implementations/MongooseUsersRepository';

import { Mailer } from '../../providers/Mailer';
import { surveyTemplate } from '../../providers/emailTemplates/surveyTemplate';

interface ISurveyDTO {
  title: string,
  subject: string,
  from: string,
  question: string,
  recipients: string,
}

class CreateSurveyController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {
        title, subject, from, question, recipients,
      } = req.body as ISurveyDTO;

      const user = req.currentUser as User;

      const surveyEntity = new Survey({
        title,
        subject,
        question,
        from,
        totalRecipients: recipients.split(',').map((email) => ({ email: email.trim() })).length,
        recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
        _user: user.id,
        dateSent: Date.now(),
      });

      const survey = await mongooseSurveysRepository.save(surveyEntity);

      const mailer = new Mailer(survey, surveyTemplate(survey));

      try {
        await mailer.send();
        await survey.save();
        await mongooseUsersRepository.removeCredits(user.id, 1);
        const userDoc = await mongooseUsersRepository.findById(user.id);
        return res.send(userDoc);
      } catch (err) {
        return res.status(422).send(err);
      }
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

const createSurveyController = new CreateSurveyController();

export { createSurveyController };
