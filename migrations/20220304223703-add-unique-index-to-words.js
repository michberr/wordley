'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(
      'words',
      {
        fields: ['word'],
        unique: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {

  }
};
