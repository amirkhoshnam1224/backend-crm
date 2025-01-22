const express = require("express");
const { registerUser, loginUser, getAllUsers } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/users", getAllUsers); // مسیر دریافت لیست کاربران

module.exports = router;
 