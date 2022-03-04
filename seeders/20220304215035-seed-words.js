'use strict';
const fs = require('fs');

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log('Seeding db with wordle words');
    const data = fs.readFileSync('./seeders/data/wordleDict.json');
    const time = new Date().toISOString()
    const words = JSON.parse(data).map(wordle => ({word: wordle, createdAt: time}));
    await queryInterface.bulkInsert('words', words)
  },

  async down (queryInterface, Sequelize) {
    console.log('Dropping all words from db');
    await queryInterface.bulkDelete('words', null, {});
  }
};
