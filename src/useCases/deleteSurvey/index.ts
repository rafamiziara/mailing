import { MongooseSurveysRepository } from 'src/repositories/implementations/MongooseSurveysRepository';
import { DeleteSurveyController } from './DeleteSurveyController';
import { DeleteSurveyUseCase } from './DeleteSurveyUseCase';

const mongooseSurveysRepository = new MongooseSurveysRepository();

const deleteSurveyUseCase = new DeleteSurveyUseCase(
  mongooseSurveysRepository,
);

const deleteSurveyController = new DeleteSurveyController(
  deleteSurveyUseCase,
);

export { deleteSurveyController };
