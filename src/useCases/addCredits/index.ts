import { MongooseUsersRepository } from 'src/repositories/implementations/MongooseUsersRepository';
import { AddCreditsController } from './AddCreditsController';
import { AddCreditsUseCase } from './AddCreditsUseCase';

const mongooseUsersRepository = new MongooseUsersRepository();

const addCreditsUseCase = new AddCreditsUseCase(
  mongooseUsersRepository,
);

const addCreditsController = new AddCreditsController(
  addCreditsUseCase,
);

export { addCreditsController };
