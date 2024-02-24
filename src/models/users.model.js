import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
    enum: ["Male", "Female", "Prefer not to say"],
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

userSchema.plugin(mongoosePaginate);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(password, salt);
  return next();
});

usersSchema.methods.isPasswordCorrect = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateOTPAccessToken = async function (password) {
  const OTPAccessToken = jwt.sign(
    { userId: this._id },
    process.env.JWT_UV_KEY,
    { expiresIn: Date.now() + 10 * 60 * 1000 }
  );
  return OTPAccessToken;
};

userSchema.methods.generateAccessToken = async function (password) {
  const accessToken = jwt.sign(
    { userId: this._id },
    process.env.JWT_ACCESS_KEY,
    { expiresIn: process.env.JWT_ACCESS_EXP }
  );
  return accessToken;
};

userSchema.methods.generateRefreshToken = async function (password) {
  const refreshToken = jwt.sign(
    { userId: this._id },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: process.env.JWT_REFRESH_EXP }
  );
  return refreshToken;
};

export const User = mongoose.model.User || mongoose.model("User", userSchema);
