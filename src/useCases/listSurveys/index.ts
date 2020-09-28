import { MongooseSurveysRepository } from '@repositories/MongooseSurveysRepository';
import { ListSurveysController } from './ListSurveysController';
import { ListSurveysUseCase } from './ListSurveysUseCase';

const mongooseSurveysRepository = new MongooseSurveysRepository();

const listSurveysUseCase = new ListSurveysUseCase(
  mongooseSurveysRepository,
);

const listSurveysController = new ListSurveysController(
  listSurveysUseCase,
);

export { listSurveysController };
