const User = require('../models/User');
const mongoose = require('mongoose'); // اضافه کردن این خط اگر قبلاً اضافه نشده

// گرفتن تمام کاربران
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// اضافه کردن کاربر جدید
const addUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id.trim();
  console.log("آی‌دی دریافتی:", id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "آی‌دی معتبر نیست" });
  }

  try {
    const user = await User.findById(id);
    console.log("کاربر یافت شده:", user); // آیا کاربری پیدا می‌شود؟

    if (!user) {
      return res.status(404).json({ message: "کاربر پیدا نشد" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "کاربر حذف شد" });
  } catch (error) {
    res.status(500).json({ message: "خطا در حذف کاربر", error: error.message });
  }
};



module.exports = { getUsers, addUser, deleteUser };
