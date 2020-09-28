import { ISurveysRepository } from '@IRepositories/ISurveysRepository';
import { IListSurveysRequestDTO } from './ListSurveysDTO';

export class ListSurveysUseCase {
  constructor(
    private surveysRepository: ISurveysRepository,
  ) {}

  async execute(data: IListSurveysRequestDTO) {
    const surveys = await this.surveysRepository.getSurveysByUserId(data.userId);
    return surveys;
  }
}
