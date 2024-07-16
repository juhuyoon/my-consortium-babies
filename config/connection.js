const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PIKACHU_DB, process.env.PIKACHU_USER,
 process.env.PIKACHU_PW,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
)

module.exports = sequelize;
