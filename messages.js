var mongoose = require('mongoose');

var messagesSchema = new mongoose.Schema({
    phn:{type:String, required:true},
    messages:{type: Array}
})

module.exports = mongoose.model('messages', messagesSchema);