'use strict';

module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define("word", {
    word: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: true,
    updatedAt: false,
  });

  Word.associate = (models) => {
    Word.hasOne(models.DailyWord)
  }

  return Word;

};

