'use strict';

export default (sequelize, DataTypes) => {
  return sequelize.define('companies', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    allowsRemote: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, { tableName: 'companies' });
};
