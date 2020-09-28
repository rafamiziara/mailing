export interface IPasswordProvider {
  toHash(password: string): string;
  compare(suppliedPassword: string, correctPassword: string): boolean;
}
