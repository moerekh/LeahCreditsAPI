
const express = require('express');
const creditList = require('./credits/creditList.js');
const dotenv = require('dotenv').config();
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`Oh, Hello.`);
});

app.get('/api/credits', (req, res) => {
    let leahcredits = JSON.stringify(creditList.creditList(dotenv.parsed));
    res.send(`${leahcredits}`);
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});