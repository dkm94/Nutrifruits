var express = require("express");
app.use(express.static(__dirname));

var server = app.listen(3010, () => {
  console.log("server is running on port", server.address().port);
});
