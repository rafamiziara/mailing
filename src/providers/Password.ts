import bcrypt from 'bcrypt';

export abstract class Password {
  static async toHash(password: string) {
    const hashCost = 12;
    const hashedPassword = await bcrypt.hash(password, hashCost);
    return hashedPassword;
  }

  static async compare(suppliedPassword: string, storedPassword: string) {
    const result = await bcrypt.compare(suppliedPassword, storedPassword);
    return result;
  }
}
