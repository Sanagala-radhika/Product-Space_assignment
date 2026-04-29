const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskdb', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
