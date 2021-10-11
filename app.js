const express = require('express');
const app = express();
require('dotenv').config();
const creditList = require('./credits/creditList.js');
const port = 8080;

const MY_API_KEY = process.env.MY_API_KEY
const MY_SPREADSHEET_ID = process.env.MY_SPREADSHEET_ID
const contact_url = `https://sheets.googleapis.com/v4/spreadsheets/${MY_SPREADSHEET_ID}/values/ProductionCoordinator?alt=json&key=${MY_API_KEY}`;

app.get('/', (req, res) => {
    res.send(`Oh, Hello.`);
});

app.get('/api/credits', (req, res) => {
    let leahcredits = JSON.stringify(creditList.creditList(contact_url));
    res.send(leahcredits);
});
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});