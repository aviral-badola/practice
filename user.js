var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    email: { type: String, required:true },
    userId: { type: String, required:true },
    password: { type: String, required:true},
    phn: {type:String,required:true},
    likes: {type: Number, default:0}
})

module.exports = mongoose.model('User', userSchema);