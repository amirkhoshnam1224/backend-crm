const express = require('express');
const router = express.Router();
const { getUsers, addUser } = require('../controllers/userController');

// روت برای گرفتن تمام کاربران
router.get('/', getUsers);

// روت برای اضافه کردن کاربر جدید
router.post('/', addUser);

module.exports = router;
