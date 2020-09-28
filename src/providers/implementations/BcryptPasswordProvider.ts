import bcrypt from 'bcrypt';

import { IPasswordProvider } from '../IPasswordProvider';

export class BcryptPasswordProvider implements IPasswordProvider {
  toHash(password: string): string {
    return bcrypt.hashSync(password, 12);
  }

  compare(suppliedPassword: string, correctPassword: string): boolean {
    return bcrypt.compareSync(suppliedPassword, correctPassword);
  }
}
