var express = require('express');
var todoController= require('./controllers/todoController');

var app= express();

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

todoController(app);

app.listen(3000);
console.log('You are listening to port 3001');
