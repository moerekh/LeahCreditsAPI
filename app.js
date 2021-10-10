
const express = require('express')
const credits = require('./credits/creditList.js');
const dotenv = require('dotenv').config();

const app = express()
const port = 8080

app.get('/api/credits', (req, res) => {
  console.log(dotenv);
    let leahcredits = JSON.stringify(credits.creditList(dotenv.parsed));

    res.send(`${leahcredits}`);
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});