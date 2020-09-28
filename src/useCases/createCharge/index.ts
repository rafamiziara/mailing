import { StripePaymentsProvider } from '@providers/StripePaymentsProvider';
import { CreateChargeController } from './CreateChargeController';
import { CreateChargeUseCase } from './CreateChargeUseCase';

const stripePaymentsProvider = new StripePaymentsProvider();

const createChargeUseCase = new CreateChargeUseCase(
  stripePaymentsProvider,
);

const createChargeController = new CreateChargeController(
  createChargeUseCase,
);

export { createChargeController };
