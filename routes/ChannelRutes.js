const express = require("express");
const { addChannel, getChannels } = require("../controllers/telegramController");

const router = express.Router();

router.post("/add", addChannel); // افزودن کانال جدید
router.get("/list", getChannels); // دریافت لیست کانال‌ها

module.exports = router;
