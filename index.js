const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./config/db');


app.use(express.json());


app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});