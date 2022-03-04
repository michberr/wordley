'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'games',
      'won',
      {
        type: Sequelize.BOOLEAN
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('games', 'won');
  }
};
