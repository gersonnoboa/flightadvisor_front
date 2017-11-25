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

// fs.readFile('./my-app/index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });

// http.createServer(function (request, response) {

//    // Send the HTTP header 
//    // HTTP Status: 200 : OK
//    // Content Type: text/plain
//    response.writeHead(200, {'Content-Type': 'text/plain'});
   
//    // Send the response body as "Hello World"
//    response.end('Hello World\n');
// }).listen(8081);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');