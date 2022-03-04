'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DailyWord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Word)
    }
  }
  DailyWord.init({
    word_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DailyWord',
  });
  return DailyWord;
};