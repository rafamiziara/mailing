import { User } from '@entities/User';

export interface ICreateSurveyRequestDTO {
  user: User,
  title: string,
  subject: string,
  question: string,
  recipients: string,
}
