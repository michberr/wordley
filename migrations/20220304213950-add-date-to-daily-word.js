'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'dailyWords',
      'gameDate',
      {
        type: Sequelize.DATEONLY
      }
    )
    await queryInterface.addIndex(
      'dailyWords',
      {
        fields: ['gameDate'],
        unique: true,
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('dailyWords', 'gameDate');
  }
};
