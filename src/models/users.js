import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
  },
  bio: {
    type: String,
  },
  gender: {
    type: String,
    default: "Prefer not to say",
  },
  website: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const userModel =
  mongoose.models.User || mongoose.model("User", userSchema);
