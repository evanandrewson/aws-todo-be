const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('cors')({
  origin: true,
  credentials: true
}));
app.use(express.json());


app.use('/api/v1/todos', require('./routes/todo'));


module.exports = app;