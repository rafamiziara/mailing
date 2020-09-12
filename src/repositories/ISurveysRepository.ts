import { Survey } from '../entities/Survey';

export interface ISurveysRepository {
  save(survey: Survey): Promise<Survey>;
  getSurveysByUserId(userId: string): Promise<Survey[]>;
  updateFeedback(surveyId: string, recipientMail: string, choice: string): Promise<Survey>;
}
