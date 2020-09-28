import { Survey as SurveyEntity } from '@entities/Survey';
import { ISurveysRepository } from '../ISurveysRepository';
import { Survey } from '../../schemas/Survey';

export class MongooseSurveysRepository implements ISurveysRepository {
  async save(surveyAttrs: SurveyEntity): Promise<SurveyEntity> {
    const survey = new Survey(surveyAttrs);
    await survey.save();
    return survey;
  }

  async getSurveysByUserId(userId: string): Promise<SurveyEntity[]> {
    const surveys = await Survey.find({ _user: userId }).select({ recipients: false });
    return surveys;
  }

  async getSurveyById(surveyId: string): Promise<SurveyEntity> {
    const survey = await Survey.findOne({ id: surveyId });
    return survey;
  }

  async updateFeedback(
    surveyId: string,
    recipientMail: string,
    choice: string,
  ): Promise<SurveyEntity> {
    const survey = await Survey.updateOne({
      id: surveyId,
      recipients: {
        $elemMatch: { email: recipientMail, responded: false },
      },
    }, {
      $inc: { [choice]: 1 },
      $set: { 'recipients.$.responded': true },
      lastResponded: new Date(),
    });

    return survey;
  }

  async delete(surveyId: string): Promise<void> {
    await Survey.findOneAndRemove({ id: surveyId });
  }
}
