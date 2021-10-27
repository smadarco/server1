const express = require('express');
const router = express.Router();

const {getAllTodos,createTodo,updateTodo,deleteTodo} = require('../controllers/todos');

//get
router.get('/',getAllTodos);

//post
router.post('/',createTodo);

//update
router.patch('/:todoId',updateTodo);

//delete
router.delete('/:todoId',deleteTodo);

module.exports = router;