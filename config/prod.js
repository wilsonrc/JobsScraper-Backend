'use strict';

const { DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;

export default {
  database : {
    name: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
  },
};
