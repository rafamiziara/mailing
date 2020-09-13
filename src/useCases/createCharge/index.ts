import { Request, Response } from 'express';
import Stripe from 'stripe';

import { secrets } from '@config/secrets';
import { User } from '../../entities/User';

import { mongooseUsersRepository } from '../../repositories/implementations/MongooseUsersRepository';

const stripe = new Stripe(secrets.stripeSecretKey, {
  apiVersion: '2020-08-27',
  typescript: true,
});

class CreateChargeController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credits',
        source: req.body.id,
      });

      const user = req.user as User;
      const newUser = await mongooseUsersRepository.addCredits(user.id, 5);

      return res.status(201).send(newUser);
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}

const createChargeController = new CreateChargeController();

export { createChargeController };
