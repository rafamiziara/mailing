import { v4 as uuid } from 'uuid';
import { Recipient } from './Recipient';

export class Survey {
  public readonly id?: string;

  public title: string;

  public question: string;

  public subject: string;

  public recipients: Recipient[];

  public totalRecipients: number;

  public yes?: number = 0;

  public no?: number = 0;

  public _user: string;

  public dateSent: number;

  public lastResponded?: Date;

  constructor(props: Omit<Survey, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
