import 'dotenv/config';

import { secrets } from '@config/secrets';
import { app } from './app';

app.listen(secrets.PORT, () => {
  console.log(`Listening on port ${secrets.PORT}!`);
});
