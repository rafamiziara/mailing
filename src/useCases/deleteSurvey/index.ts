import { MongooseSurveysRepository } from '@repositories/MongooseSurveysRepository';
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
