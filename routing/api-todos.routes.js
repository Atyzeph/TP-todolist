const router = require('express').Router();
// const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/api-todo.controller');
const apiTodoController = require('../controllers/api-todo.controller');
const { resolve } = require('path');


// GET /api/todos
router.get('/todos', apiTodoController.getTodos);

// POST /api/todos
router.post('/todos', apiTodoController.createTodo);

// PUT /api/todos/:id
router.put('/todos/:id', apiTodoController.updateTodo);

// DELETE /api/todos/:id
router.delete('/todos/:id', apiTodoController.deleteTodo);

module.exports = router;
