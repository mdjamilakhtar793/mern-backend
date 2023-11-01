import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "First Enter your name"],
    },
    email: {
      type: String,
      required: [true, "First Enter your Email"],
    },
    phoneno: {
      type: Number,
      required: [true, "Enter a valid phone number"],
    },
    address: {
      type: String,
      required: [true, "First Enter your Address"],
    },
    comments: {
      type: String,
      required: [true, "First Enter your Message"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", registerSchema);
