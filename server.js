var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname));

io.on('connection', () =>{
  console.log('a user is connected');
 })






var server = app.listen(3010, () => {
  console.log('server is running on port', server.address().port);
 });