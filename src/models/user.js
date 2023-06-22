const mongoose = require('mongoose');
const bcryp = require('bcrypt-nodejs');
const { Schema } = mongoose;

const userScherma = new Schema({
  email: String,
  password: String
});

userScherma.methods.encryptPassword = (password) => {
  return bcryp.hashSync(password,bcryp.genSaltSync(10));
};

userScherma.methods.comparePassword = function (password) {
  return bcryp.compareSync(password, this.password); 
};

module.exports = mongoose.model('user', userScherma);
