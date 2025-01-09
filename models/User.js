const mongoose = require('mongoose');

// تعریف اسکیمای کاربر
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  accountId: String,
  startDate: Date,
  endDate: Date,
  plan: String,
  userCount: Number,
  service: String,
  payment: Number,
  discount: Number,
  referral: String,
});

// تعریف مدل کاربر
const User = mongoose.model('User', userSchema);

module.exports = User;
