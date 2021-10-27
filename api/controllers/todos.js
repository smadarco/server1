module.exports={
    getAllTodos:(req,res)=>{
        res.status(200).json({
            message: 'get all todos'
        })
    },
    createTodo:(req,res)=>{
        res.status(200).json({
            message: 'create new todo'
        })
    },
    updateTodo:(req,res)=>{
        const todoId = req.params.todoId
        res.status(200).json({
            message: ' update todo- $(todoId)'
        })
    },
   deleteTodo:(req,res)=>{
    const todoId = req.params.todoId
    res.status(200).json({
        message: ' delete todo- $(todoId)'
    })
  },
}

