import { Request, Response } from 'express';
import { Path } from 'path-parser';
import { URL } from 'url';
import _ from 'lodash';

import { GetFeedbackUseCase } from './GetFeedbackUseCase';

export class GetFeedbackController {
  constructor(
    private getFeedbackUseCase: GetFeedbackUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const p = new Path('/api/surveys/:surveyId/:choice');

      _.chain(req.body)
        .map(({ url, email }) => {
          const match = p.test(new URL(url).pathname);
          if (match) {
            return { email, surveyId: match.surveyId, choice: match.choice };
          }
          return match;
        })
        .compact()
        .uniqBy(['email', 'surveyId'])
        .each(({ surveyId, email, choice }) => {
          this.getFeedbackUseCase.execute({ surveyId, email, choice });
        })
        .value();

      return res.send({});
    } catch (err) {
      return res.status(400).json({
        message: err.message || 'Unexpected error',
      });
    }
  }
}
