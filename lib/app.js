const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('cookie-parser')());
app.use(require('cors')({
  origin: true,
  credentials: true
}));
app.use(express.json());


// app.use('/api/v1/auth', require('./routes/auth'));


module.exports = app;