var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname));

const uri =
  "mongodb+srv://Admin:MndQDlXM2OZqdtBt@cluster0.phlbn.mongodb.net/e_commerce?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
io.on('connection', () =>{
  console.log('a user is connected');
 })






var server = app.listen(3010, () => {
  console.log("server is running on port", server.address().port);
});
