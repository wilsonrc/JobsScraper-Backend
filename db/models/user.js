'use strict';

export default (sequelize, DataTypes) => {
  return sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'users'
  });
};
