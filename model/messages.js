const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    message: {
        type: String
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Message', messageSchema);