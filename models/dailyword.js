'use strict';

module.exports = (sequelize, DataTypes) => {
  const DailyWord = sequelize.define("dailyWord", {
    wordId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  DailyWord.associate = (models) => {
    DailyWord.belongsTo(models.Word)
  }

  return DailyWord;
};
