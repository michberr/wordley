'use strict';

module.exports = (sequelize, DataModel) => {
  const Guess = sequelize.define("guess", {
    gameId: {
      type: DataModel.INTEGER,
      allowNull: false
    },
    word: {
      type: DataModel.STRING,
      allowNull: false
    },
    correct: {
      type: DataModel.BOOLEAN,
      allowNull: false
    }

  });

  Guess.associate = (models) => {
    Guess.belongsTo(models.Game)
  }
  return Guess;
};
