const express = require('express');
const morgan = require('morgan');
const categoryRouter = require('./routes/categoryRoutes');
const postsRoutes = require('./routes/postsRoutes');
const { connection } = require('./dbConnection');
const app = express();

connection.connect((err) => {
    if (err) {
        console.error('MySQL connection error: ', err);
    } else {
        console.log('Connected to MySQL database!');
    }
});

app.use(express.json());
app.use(morgan());
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/posts', postsRoutes);




module.exports = app;
