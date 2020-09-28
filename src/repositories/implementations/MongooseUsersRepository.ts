import { IUsersRepository } from '../IUsersRepository';
import { User as UserEntity } from '../../entities/User';
import { User } from '../../schemas/User';

export class MongooseUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<UserEntity> {
    const user = await User.findOne({ id });

    return user;
  }

  async findByGoogleId(googleId: string): Promise<UserEntity> {
    const user = await User.findOne({ googleId });

    return user;
  }

  async save(userAttrs: UserEntity): Promise<UserEntity> {
    const user = new User(userAttrs);
    await user.save();
    return user;
  }

  async addCredits(userId: string, credits: number): Promise<UserEntity> {
    const user = await User.findOne({ id: userId });
    user.credits += credits;
    await user.save();
    return user;
  }

  async removeCredits(userId: string, credits: number): Promise<UserEntity> {
    const user = await User.findOne({ id: userId });
    user.credits -= credits;
    await user.save();
    return user;
  }
}
