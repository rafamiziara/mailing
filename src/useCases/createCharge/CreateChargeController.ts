import { Request, Response } from 'express';
import { CreateChargeUseCase } from './CreateChargeUseCase';

export class CreateChargeController {
  constructor(
    private createChargeUseCase: CreateChargeUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const sessionId = await this.createChargeUseCase.execute();

      return res.status(201).json({ id: sessionId });
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
