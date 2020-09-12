import 'dotenv/config';

import { Mongoose } from '@config/databases/implementations/MongooseDatabase';
import { secrets } from '@config/secrets';
import { app } from './app';

const mongoose = new Mongoose();
mongoose.connect('mailing');

app.listen(secrets.port, () => {
  console.log(`Listening on port ${secrets.port}!!`);
});
