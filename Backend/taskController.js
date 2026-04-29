const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    UserId: req.userId
  });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { UserId: req.userId }
  });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, UserId: req.userId }
  });

  if (!task) return res.status(404).json({ msg: 'Not found' });

  task.status = req.body.status;
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, UserId: req.userId }
  });

  res.json({ msg: 'Deleted' });
};
