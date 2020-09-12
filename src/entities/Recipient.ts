export class Recipient {
  public readonly email: string;

  public responded?: boolean = false;

  constructor(props) {
    Object.assign(this, props);
  }
}
