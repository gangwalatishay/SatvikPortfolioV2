import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingUser = await User.findOne({
      email: "admin@portfolio.com",
    });

    if (existingUser) {
      console.log("✅ Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      username: "Admin",
      email: "admin@portfolio.com",
      password: hashedPassword,
    });

    console.log("🎉 Admin Created Successfully");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedAdmin();