import Stripe from 'stripe';

import { secrets } from '@config/secrets';
import { IPaymentsProvider, IProduct } from '../IPaymentsProvider';

const stripe = new Stripe(secrets.stripeSecretKey, {
  apiVersion: '2020-08-27',
  typescript: true,
});

export class StripePaymentsProvider implements IPaymentsProvider {
  async createCheckout(products: IProduct[]): Promise<string> {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: products,
      mode: 'payment',
      success_url: `${secrets.redirectDomain}/api/stripe/success`,
      cancel_url: `${secrets.redirectDomain}/surveys`,
    });

    return session.id;
  }
}
