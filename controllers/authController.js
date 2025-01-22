const AuthUser = require("../models/AuthUser");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "ایمیل قبلاً ثبت‌نام شده است." });
    }

    const newUser = new AuthUser({ firstName, lastName, email, password });
    await newUser.save();
    res.status(201).json({ message: "ثبت‌نام با موفقیت انجام شد!" });
  } catch (error) {
    res.status(500).json({ message: "خطا در ثبت‌نام", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "ایمیل یا رمز عبور نادرست است." });
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "ایمیل یا رمز عبور نادرست است." });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, "your_jwt_secret", { expiresIn: "1d" });
    res.status(200).json({ message: "ورود موفقیت‌آمیز بود!", token });
  } catch (error) {
    res.status(500).json({ message: "خطا در ورود", error: error.message });
  }
};
// دریافت لیست کاربران
// دریافت لیست کاربران
const getAllUsers = async (req, res) => {
    try {
      // استفاده از مدل AuthUser
      const users = await AuthUser.find({}, { password: 0 }); // مخفی کردن فیلد رمز عبور
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "خطا در دریافت لیست کاربران", error: error.message });
    }
  };
  
  module.exports = { registerUser, loginUser, getAllUsers };
  