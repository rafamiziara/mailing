import mongoose from 'mongoose';
import { secrets } from '@config/secrets';
import { IDatabase } from '../IDatabase';
import { DatabaseConnectionError } from '../../../errors/DatabaseConnectionError';

export class Mongoose implements IDatabase {
  async connect(dbName: string) {
    try {
      const URL = `${secrets.mongoURI}/${dbName}`;

      await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error(err);
      throw new DatabaseConnectionError();
    }
  }

  async disconnect() {
    await mongoose.connection.close();
  }
}
