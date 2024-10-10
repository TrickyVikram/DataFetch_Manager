
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
    res.send(`Server running in ${ENV} mode on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running in ${ENV} mode on port ${PORT}`);
});
