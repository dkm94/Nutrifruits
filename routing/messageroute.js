const app = require('express').Router();
const Message = require('../model/messages');


app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})


app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) =>{
    if(err){
      sendStatus(500);
    } else{
      res.sendStatus(200);
    }
  })
})

