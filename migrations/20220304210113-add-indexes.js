'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addIndex(
      'users',
      {
        fields: ['email'],
        unique: true,
      }
    )
    await queryInterface.addIndex(
      'games',
      {
        fields: ['userId']
      }
    );
    await queryInterface.addIndex(
      'guesses',
      {
        fields: ['gameId']
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeIndex('users', 'users_email');
    await queryInterface.removeIndex('games', 'games_user_id');
    await queryInterface.removeIndex('guesses', 'guesses_game_id');
  }
};
