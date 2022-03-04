'use strict';

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define("word", {
    fwordirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Word.associate = (models) => {
    Word.hasOne(models.DailyWord)
  }

  return Word;

};

