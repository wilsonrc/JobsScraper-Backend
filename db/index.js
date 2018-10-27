import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from './../config';

const { database, dialect, username, password, host } = config.database;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
const db = {};
const modelsPath = `${__dirname}/models`;

fs
  .readdirSync(modelsPath)
  .filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize['import'](path.join(modelsPath, file));
    if (model) {
      db[model.name] = model;
    }
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default sequelize;
