var express = require("express");
var mongoose = require("mongoose");

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

var server = app.listen(3010, () => {
  console.log("server is running on port", server.address().port);
});
