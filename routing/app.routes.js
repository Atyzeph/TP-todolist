const express = require('express');
const router = express.Router();
const apiTodoController = require('../controllers/api-todo.controller');
const { resolve } = require('path');


router.get('/todos', apiTodoController.getTodos);

router.post('/todos', apiTodoController.createTodo);

router.delete('/todos', apiTodoController.deleteTodo);

module.exports = router;

