import { User } from '../entities/User';

export interface IUsersRepository {
  findById(id: string): Promise<User>;
  findByGoogleId(googleId: string): Promise<User>;
  save(user: User): Promise<User>;
  addCredits(userId: string, credits: number): Promise<User>;
  removeCredits(userId: string, credits: number): Promise<User>;
}
