import { IPaymentsProvider } from '@IProviders/IPaymentsProvider';

export class CreateChargeUseCase {
  constructor(
    private paymentsProvider: IPaymentsProvider,
  ) {}

  async execute() {
    const sessionId = await this.paymentsProvider.createCheckout(
      [
        {
          name: 'Add 5 Credits',
          amount: 500,
          currency: 'usd',
          description: 'Genuine card information cannot be used in test mode. Instead, use the test card number: 4242 4242 4242 4242, a valid expiration date in the future, and any random CVC number, to create a successful payment.',
          quantity: 1,
        },
      ],
    );

    return sessionId;
  }
}
