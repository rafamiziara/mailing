import { Request, Response } from 'express';
import { User } from '@entities/User';
import { secrets } from '@config/secrets';
import { AddCreditsUseCase } from './AddCreditsUseCase';

export class AddCreditsController {
  constructor(
    private addCreditsUseCase: AddCreditsUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<void> {
    const user = req.currentUser as User;

    try {
      await this.addCreditsUseCase.execute({ userId: user.id });

      return res.redirect(`${secrets.redirectDomain}/surveys`);
    } catch (err) {
      return res.redirect(`${secrets.redirectDomain}/surveys`);
    }
  }
}
