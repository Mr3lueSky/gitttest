const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello world'));
app.get('/hello', (req, res) => res.send('sup boii!!'));

app.listen(process.env.PORT || 5000);
