import { IPaymentsProvider } from 'src/providers/IPaymentsProvider';

export class CreateChargeUseCase {
  constructor(
    private paymentsProvider: IPaymentsProvider,
  ) {}

  async execute() {
    const sessionId = await this.paymentsProvider.createCheckout(
      [
        {
          name: 'Add Credits',
          amount: 500,
          currency: 'usd',
          description: '$5 for 5 credits',
          quantity: 1,
        },
      ],
    );

    return sessionId;
  }
}
