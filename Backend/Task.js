const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Task = sequelize.define('Task', {
  title: DataTypes.STRING,
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;
