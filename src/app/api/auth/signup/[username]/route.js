import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/helper/db";
import { userModel } from "@/models/users";
import { userAgent } from "next/server";
connect();

export const GET = async (req, { params }) => {
  try {
    const { username } = params;
    const regex = /^[a-z0-9_\.]+$/;
    if (regex.test(username)) {
      const findUser = await userModel.findOne({ username: username });
      if (!findUser) {
        return NextResponse.json({ message: "Ok", isAvail: true });
      } else {
        return NextResponse.json({ message: "Ok", isAvail: false });
      }
    } else {
      const findUser = await userModel.findOne({ email: username });
      if (!findUser) {
        return NextResponse.json({ message: "Ok", isAvail: true });
      } else {
        return NextResponse.json({ message: "Ok", isAvail: false });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error!" });
  }
};
