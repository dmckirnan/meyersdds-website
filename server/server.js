const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));

app.listen(5000, () => console.log('Listening on 5000'));
