import { Schema, model, Document } from 'mongoose';
import { IUsersRepository } from '../IUsersRepository';
import { User as UserAttrs } from '../../entities/User';

// import { Password } from '../../providers/Password';

interface UserDoc extends Document, UserAttrs {
  id: string;
}

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      default: 0,
    },
  }, {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.googleId;
        delete ret.__v;
      },
    },
  },
);

// userSchema.pre('save', async function hashPassword(done) {
//   if (this.isModified('password')) {
//     const hashed = await Password.toHash(this.get('password'));
//     this.set('password', hashed);
//   }
//   done();
// });

const User = model<UserDoc>('User', userSchema);

class MongooseUsersRepository implements IUsersRepository {
  async findById(id: string): Promise<UserDoc> {
    const user = await User.findOne({ id });

    return user;
  }

  async findByGoogleId(googleId: string): Promise<UserDoc> {
    const user = await User.findOne({ googleId });

    return user;
  }

  async save(userAttrs: UserAttrs): Promise<UserDoc> {
    const user = new User(userAttrs);
    await user.save();
    return user;
  }

  async addCredits(userId: string, credits: number): Promise<UserDoc> {
    const user = await this.findById(userId);
    user.credits += credits;
    await user.save();
    return user;
  }

  async removeCredits(userId: string, credits: number): Promise<UserDoc> {
    const user = await this.findById(userId);
    user.credits -= credits;
    await user.save();
    return user;
  }
}

export const mongooseUsersRepository = new MongooseUsersRepository();
