import sgMail from '@sendgrid/mail';
import { secrets } from '@config/secrets';

import { IMailProvider, IMessage } from '../IMailProvider';

export class SendgridMailProvider implements IMailProvider {
  constructor() {
    sgMail.setApiKey(secrets.sendGridKey);
  }

  async sendMail(message: IMessage): Promise<void> {
    try {
      await sgMail.send(
        {
          ...message,
          trackingSettings: {
            clickTracking: {
              enable: true,
              enableText: true,
            },
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
