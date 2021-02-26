const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    gender: {type:String, enum:["male","female"]},
    roles : {type:String, enum:["user","admin","moderator"]}

});
module.exports = mongoose.model("User", userSchema);