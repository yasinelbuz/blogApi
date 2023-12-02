const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running http://127.0.0.1:${port}`);
});
