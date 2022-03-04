'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('validWords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    await queryInterface.addIndex(
      'validWords',
      {
        fields: ['word'],
        unique: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('validWords');
  }
};
