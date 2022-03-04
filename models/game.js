'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User)
      this.belongsTo(models.DailyWord)
    }
  }
  Game.init({
    user_id: DataTypes.INTEGER,
    daily_word_id: DataTypes.INTEGER,
    completed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games'
  });
  return Game;
};