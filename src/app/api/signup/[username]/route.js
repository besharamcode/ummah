import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/helper/db";
import { userModel } from "@/models/users";
import { userAgent } from "next/server";
connect();

export const GET = async (req) => {
  try {
    const { pathname } = new URL(req.url);
    const data = pathname.split("/").pop();
    const regex = /^[a-z0-9_\.]+$/;
    if (regex.test(data)) {
      const findUser = await userModel.findOne({ username: data });
      if (!findUser) {
        return NextResponse.json({ message: "Ok", isAvail: true });
      } else {
        return NextResponse.json({ message: "Ok", isAvail: false });
      }
    } else {
      const findUser = await userModel.findOne({ email: data });
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
