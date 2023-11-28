const express = require('express');
const morgan = require('morgan');
const categoryRouter = require('./routes/categoryRoutes');

const app = express();
app.use(express.json());
app.use(morgan());

app.use('/api/v1/categories', categoryRouter);

module.exports = app;
