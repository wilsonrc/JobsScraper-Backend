import express from 'express';
import db from './db';

const app = express();

// Testing DB connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3000, () => console.log('Scrapper backend started on port 3000'));
