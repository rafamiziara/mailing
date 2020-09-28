import { MongooseSurveysRepository } from 'src/repositories/implementations/MongooseSurveysRepository';
import { MongooseUsersRepository } from 'src/repositories/implementations/MongooseUsersRepository';
import { SendgridMailProvider } from '../../providers/implementations/SendgridMailProvider';
import { CreateSurveyController } from './CreateSurveyController';
import { CreateSurveyUseCase } from './CreateSurveyUseCase';

const mongooseSurveysRepository = new MongooseSurveysRepository();
const mongooseUsersRepository = new MongooseUsersRepository();
const sendgridMailProvider = new SendgridMailProvider();

const createSurveyUseCase = new CreateSurveyUseCase(
  mongooseSurveysRepository,
  mongooseUsersRepository,
  sendgridMailProvider,
);

const createSurveyController = new CreateSurveyController(
  createSurveyUseCase,
);

export { createSurveyController };
