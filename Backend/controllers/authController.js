import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.js";

// REGISTER (unchanged)
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check MongoDB
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔥 CREATE USER IN FIREBASE AUTH
    await createUserWithEmailAndPassword(auth, email, password);

    // Hash password for MongoDB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save in MongoDB
    await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

// LOGIN (unchanged)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      name: user.name
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ REAL FORGOT PASSWORD (Firebase)
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("Forgot password request for:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found in MongoDB");
      return res.status(404).json({ message: "User not registered" });
    }

    console.log("Calling Firebase sendPasswordResetEmail...");
    await sendPasswordResetEmail(auth, email);
    console.log("Firebase accepted reset request");

    res.json({ message: "Password reset email sent successfully" });
  } catch (err) {
    console.error("Forgot password error:", err.message);
    res.status(400).json({ message: err.message });
  }
};

