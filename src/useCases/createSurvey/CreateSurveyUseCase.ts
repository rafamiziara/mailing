import { IMailProvider } from '@IProviders/IMailProvider';
import { ISurveysRepository } from '@IRepositories/ISurveysRepository';
import { IUsersRepository } from '@IRepositories/IUsersRepository';
import { Survey } from '@entities/Survey';
import { secrets } from '@config/secrets';
import { surveyTemplate } from '../../utils/surveyTemplate';
import { ICreateSurveyRequestDTO } from './CreateSurveyDTO';

export class CreateSurveyUseCase {
  constructor(
    private surveysRepository: ISurveysRepository,
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(data: ICreateSurveyRequestDTO) {
    const recipientsList = data.recipients.split(',').map((email) => ({ email: email.trim() }));

    const surveyEntity = new Survey({
      ...data,
      totalRecipients: recipientsList.length,
      recipients: recipientsList,
      _user: data.user.id,
      dateSent: Date.now(),
    });

    const survey = await this.surveysRepository.save(surveyEntity);

    const msg = {
      to: recipientsList,
      from: { email: secrets.emailFrom },
      subject: data.subject,
      body: data.question,
      html: surveyTemplate(survey),
    };

    await this.mailProvider.sendMail(msg);
    await this.usersRepository.removeCredits(data.user.id, 1);

    return survey;
  }
}
