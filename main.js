var http = require('http'),
fs = require('fs');

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/src/index.html')
})

app.use('/static', express.static(__dirname + '/src'));

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })