import { ISurveysRepository } from 'src/repositories/ISurveysRepository';
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
