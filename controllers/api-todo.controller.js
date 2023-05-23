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

exports.deleteTodo = (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.redirect('/todos');
};


exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todoToUpdate = todos.find(todo => todo.id === Number(id));
  
  if (todoToUpdate) {
    todoToUpdate.txt = task.trim();
    res.redirect('/todos');
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};

