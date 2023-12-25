import { OTPModel } from "@/models/verifyuser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const GET = async (req, { params }) => {
  try {
    const OTP = params.otp;
    const findOTP = await OTPModel.findOne({ OTP });
    if (findOTP) {
      if (req.user === findOTP.userid) {
        return NextResponse.json({ message: "OK" });
      } else {
        return NextResponse.json({ message: "User not found" });
      }
    } else {
      return NextResponse.json({ message: "OTP expired" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};

export const POST = async (req, { params }) => {
  try {
    const OTP = params.otp;
    const findOTP = await OTPModel.findOne({ OTP });
    if (findOTP) {
      if (req.user === findOTP.userid ) {
        return NextResponse.json({ message: "OK" });
      } else {
        return NextResponse.json({ message: "User not found" });
      }
    } else {
      return NextResponse.json({ message: "OTP expired" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};
