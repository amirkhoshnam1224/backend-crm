const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // نام کانال، یکتا باشد
    createdAt: { type: Date, default: Date.now }, // تاریخ ثبت
});

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
