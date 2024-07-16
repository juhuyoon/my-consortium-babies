const router = require("express").Router();
const Task = require('../../models/Task');

// localhost:3001/api/
router.post('/', async (req, res) => {
  const newTask = Task.create({
    name: 'Feed Pikachu',
    description: 'Feed Pikachu he is hungry',
    status: 'todo'
  });

  res.json(newTask);
})


module.exports = router;