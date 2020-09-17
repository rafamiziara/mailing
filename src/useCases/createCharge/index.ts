import { Request, Response } from 'express';
import Stripe from 'stripe';

import { secrets } from '@config/secrets';

const stripe = new Stripe(secrets.stripeSecretKey, {
  apiVersion: '2020-08-27',
  typescript: true,
});

class CreateChargeController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            name: 'Add Credits',
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${secrets.redirectDomain}/api/stripe/success`,
        cancel_url: `${secrets.redirectDomain}/surveys`,
      });

      return res.status(201).json({ id: session.id });
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

const createChargeController = new CreateChargeController();

export { createChargeController };
