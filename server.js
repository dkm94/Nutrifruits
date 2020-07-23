const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require("http").Server(app);
const io = require("socket.io")(http);

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./controller/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

app.listen(process.env.PORT || 3010, () => console.log(`Server has started.`));
