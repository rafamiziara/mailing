import { ISurveysRepository } from 'src/repositories/ISurveysRepository';
import { IGetFeedbackRequestDTO } from './GetFeedbackDTO';

export class GetFeedbackUseCase {
  constructor(
    private surveysRepository: ISurveysRepository,
  ) {}

  async execute(data: IGetFeedbackRequestDTO) {
    await this.surveysRepository.updateFeedback(data.surveyId, data.email, data.choice);
  }
}
