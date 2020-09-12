import { v4 as uuid } from 'uuid';

export class User {
  public readonly id?: string;

  public readonly googleId: string;

  public credits?: number = 0;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
