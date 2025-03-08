const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  configId: { type: String, required: false } ,
  accountId: String,
  startDate: Date,
  endDate: Date,
  plan: String,
  userCount: Number,
  service: String,
  payment: Number,
  discount: Number,
  referral: String,
  status: { type: String, default: "active" },

});

const CRMUser = mongoose.models.CRMUser || mongoose.model("CRMUser", userSchema);

module.exports = CRMUser;
