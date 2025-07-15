const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: {type:String,required:true},
  email: { type: String, unique: true },
  password: {type:String,required:true} // ✅ Store hashed password
});


const User = mongoose.model("User",userSchema);

module.exports = User;