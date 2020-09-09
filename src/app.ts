import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

export { app };
