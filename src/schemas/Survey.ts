import { Schema, model, Document } from 'mongoose';
import { Survey as SurveyEntity } from '@entities/Survey';

interface SurveyDoc extends Document, SurveyEntity {
  id: string;
}

const surveySchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    totalRecipients: {
      type: Number,
      required: true,
    },
    recipients: [{
      email: {
        type: String,
        required: true,
      },
      responded: {
        type: Boolean,
        default: false,
      },
    }],
    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
    _user: {
      type: String,
      required: true,
    },
    dateSent: {
      type: Number,
      required: true,
    },
    lastResponded: Date,
  }, {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

const Survey = model<SurveyDoc>('Survey', surveySchema);

export { Survey };
