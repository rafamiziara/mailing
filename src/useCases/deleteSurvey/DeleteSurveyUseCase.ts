import { ISurveysRepository } from '@IRepositories/ISurveysRepository';
import { IDeleteSurveyRequestDTO } from './DeleteSurveyDTO';

export class DeleteSurveyUseCase {
  constructor(
    private surveysRepository: ISurveysRepository,
  ) {}

  async execute(data: IDeleteSurveyRequestDTO) {
    const survey = await this.surveysRepository.getSurveyById(data.surveyId);

    if (survey._user === data.userId) {
      await this.surveysRepository.delete(data.surveyId);
    }

    const surveys = await this.surveysRepository.getSurveysByUserId(data.userId);
    return surveys;
  }
}
