import { Schema, model, Document } from 'mongoose';
import { User as UserAttrs } from '@entities/User';

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

const User = model<UserDoc>('User', userSchema);

export { User };
