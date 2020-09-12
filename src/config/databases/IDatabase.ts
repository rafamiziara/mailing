export interface IDatabase {
  connect(dbName: string): void;
  disconnect(): void;
}
