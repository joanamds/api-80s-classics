const express = require('express');
const { movieRouter } = require('./routes');
const app = express();

app.use(express.json());

app.use('/movies', movieRouter);
module.exports = app;