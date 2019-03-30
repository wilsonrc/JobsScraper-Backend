module.exports = {
  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  */
  up: (queryInterface, Sequelize) => queryInterface.createTable('job_posts', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    company_id: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id',
      },
    },
    howToApply: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isRemote: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    postedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  }),

  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.dropTable('users');
  */
  down: queryInterface => queryInterface.dropTable('job_posts')
  ,
};
