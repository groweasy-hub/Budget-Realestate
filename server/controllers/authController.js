const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

exports.register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ success: false, message: "Email already registered" });

  const user = await User.create({ name, email, password, phone });
  res.status(201).json({ success: true, token: generateToken(user._id), data: { id: user._id, name: user.name, email: user.email, role: user.role } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ success: false, message: "Invalid credentials" });

  res.json({ success: true, token: generateToken(user._id), data: { id: user._id, name: user.name, email: user.email, role: user.role } });
};

exports.getMe = async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ success: true, data: user });
};
