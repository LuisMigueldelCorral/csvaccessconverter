const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// Get the adodb module
var ADODB = require('node-adodb');
ADODB.debug = true;

// Connect to the MS Access DB
/*
var connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=node-adodb.mdb;Persist Security Info=False;');
connection.query('SELECT UserId FROM Users WHERE UserName LIKE "%Nuintun%"').then(data => {
  console.log(JSON.stringify(data, null, 2));
})
*/
// Query the DB
/*
connection
    .query('SELECT UserId FROM Users WHERE UserName LIKE "%Nuintun%"')
    .on('done', function (data){
        console.log('Result:'.green.bold, data);
    })
*/
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))