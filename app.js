const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const creditList = require('./credits/creditList.js');
const port = 8080;

app.get('/', (req, res) => {
    res.send(`Oh, Hello.`);
});

app.get('/api/credits', (req, res) => {
    let leahcredits = JSON.stringify(creditList.creditList(dotenv.parsed));
    res.send(leahcredits);
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});