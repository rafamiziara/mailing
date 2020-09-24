import sgMail from '@sendgrid/mail';
import { secrets } from '@config/secrets';

import { Survey } from '../entities/Survey';

class Mailer {
  public recipients;

  public isMultiple;

  public msg;

  constructor(survey: Survey, htmlContent) {
    const { from, subject, recipients } = survey;

    sgMail.setApiKey(secrets.sendGridKey);

    this.recipients = recipients.map(({ email }) => email);
    this.isMultiple = true;

    if (this.recipients.length === 1) {
      const [recipient] = this.recipients;
      this.recipients = recipient;
      this.isMultiple = false;
    }

    this.msg = {
      to: this.recipients,
      from,
      subject,
      html: htmlContent,

      tracking_settings: {
        click_tracking: {
          enable: true,
          enable_text: true,
        },
      },

      isMultiple: this.isMultiple,
    };
  }

  async send() {
    try {
      return await sgMail.send(this.msg);
    } catch (error) {
      return console.log(error);
    }
  }
}

export { Mailer };
