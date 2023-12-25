import mongoose, { Schema, model } from "mongoose";

const verifyUserSchema = new Schema({
  userid: {
    type: String,
    required: true,
    index: true,
  },
  OTP: {
    type: String,
    required: true,
    index: true,
  },
  expireAt: {
    type: Date,
    default: () => new Date(Date.now() + 10 * 60 * 1000),
  },
});

export const OTPModel =
  mongoose.models.OTP || mongoose.model("OTP", verifyUserSchema);
