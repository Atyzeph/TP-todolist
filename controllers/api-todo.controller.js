const { todos } = require('../database/data.json');

exports.getTodos = (req, res) => {
  res.render('todos', { todos });
};

exports.createTodo = (req, res) => {
  const { task } = req.body;
  if (task.trim() !== '') {
    const newTodoId = todos.length + 1;
    const newTodo = {
      id: newTodoId,
      txt: task,
      done: false,
    };

    todos.push(newTodo);
    res.redirect('/todos');
  } else {
    res.redirect('/todos');
  }
};
