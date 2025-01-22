const Channel = require("../models/Channels-T");

// افزودن کانال جدید
const addChannel = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "نام کانال الزامی است" });
    }

    try {
        const existingChannel = await Channel.findOne({ name });
        if (existingChannel) {
            return res.status(400).json({ message: "این کانال قبلاً ثبت شده است" });
        }

        const newChannel = new Channel({ name });
        await newChannel.save();

        res.status(201).json({ message: "کانال با موفقیت ثبت شد", channel: newChannel });
    } catch (error) {
        res.status(500).json({ message: "خطا در ثبت کانال", error: error.message });
    }
};

// دریافت لیست کانال‌ها
const getChannels = async (req, res) => {
    try {
        const channels = await Channel.find({});
        res.status(200).json({ channels });
    } catch (error) {
        res.status(500).json({ message: "خطا در دریافت لیست کانال‌ها", error: error.message });
    }
};

module.exports = { addChannel, getChannels };
