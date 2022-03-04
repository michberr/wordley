const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || 'development'
let config
if (env === 'development') {
  config = dbConfig.development
}

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    const capitalizedModel = model.name[0].toUpperCase() + model.name.slice(1);
    db[capitalizedModel] = model;
  });

console.log('db', db)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
