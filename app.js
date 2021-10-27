const express = require('express');
const app = express();
const morgan = require('morgan');
const todos = require('./api/routes/todosRoute');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.use((req,res,next) =>{
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
    if(req.method == "OPTIONS")
    {
        res.header("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
        return res.status(200).json({});
    }
    next();
});
//routes
app.use('/todos',todos);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
