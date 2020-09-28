import { IUsersRepository } from '@IRepositories/IUsersRepository';
import { IAddCreditsRequestDTO } from './AddCreditsDTO';

export class AddCreditsUseCase {
  constructor(
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: IAddCreditsRequestDTO) {
    await this.usersRepository.addCredits(data.userId, 5);
  }
}
