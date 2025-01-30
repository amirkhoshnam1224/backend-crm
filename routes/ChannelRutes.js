const express = require("express");
const { addChannel, getChannels,deleteChannel  } = require("../controllers/telegramController");

const router = express.Router();

router.post("/add", addChannel); // افزودن کانال جدید
router.get("/list", getChannels); // دریافت لیست کانال‌ها
router.delete("/delete/:id", deleteChannel); // حذف کانال بر اساس ID

module.exports = router;
