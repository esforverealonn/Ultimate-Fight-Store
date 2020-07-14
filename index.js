var express = require('express');
var path = require('path');
var app = express();

app.use( express.static( __dirname ) );

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
    
})
console.log('Listening port 8080')
app.listen(8080);