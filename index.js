const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, 'localhost', () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})