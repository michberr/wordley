'use strict';

module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define("game", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dailyWordId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    completedAt: {
      type: DataTypes.DATE
    }

  });

  Game.associate = (models) => {
    Game.belongsTo(models.User)
    Game.belongsTo(models.DailyWord)
  }
  return Game;
};
