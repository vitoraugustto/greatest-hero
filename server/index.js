import express from 'express';
import mongoose from 'mongoose';

import { DB_PASSWORD, DB_USERNAME } from './.env.js';
import heroRoutes from './src/routes/heroRoutes.js';
import itemsRoutes from './src/routes/itemsRoutes.js';
import { CLIENT_URL } from './src/utils/constants.js';

const app = express();
const PORT = 8000;

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT_URL);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/items', itemsRoutes);
app.use('/api/v1/hero', heroRoutes);

mongoose
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@heros-market-cluster.mcfekrd.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log('App listening on port', PORT);
    });
  })
  .catch((err) => console.log(err));
