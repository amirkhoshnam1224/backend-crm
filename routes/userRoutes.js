const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser } = require('../controllers/userController');

// روت برای گرفتن تمام کاربران
router.get('/', getUsers);

// روت برای اضافه کردن کاربر جدید
router.post('/', addUser);

// روت برای حذف کاربر
router.delete('/:id', deleteUser);

module.exports = router;
