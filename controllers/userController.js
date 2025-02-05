const CRMUser = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await CRMUser.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const user = new CRMUser(req.body);

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id.trim();

  try {
    const deletedUser = await CRMUser.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "کاربر پیدا نشد" });
    }
    res.status(200).json({ message: "کاربر حذف شد", deletedUser });
  } catch (error) {
    res.status(500).json({ message: "خطا در حذف کاربر", error: error.message });
  }
};

// ویرایش کاربر
const updateUser = async (req, res) => {
  const id = req.params.id.trim();
  const updatedData = req.body;

  try {
    const updatedUser = await CRMUser.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "کاربر پیدا نشد" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "خطا در ویرایش کاربر", error: error.message });
  }
};

module.exports = { getUsers, addUser, deleteUser,updateUser };
