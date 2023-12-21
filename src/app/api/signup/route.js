import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/helper/db";
import { userModel } from "@/models/users";
import bcrypt from "bcryptjs";

connect();

export const GET = async () => {
  try {
    const findUsername = await userModel.find();
    console.log(findUsername);
    return NextResponse.json({ Name: "Ummah" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};

export const POST = async (req) => {
  try {
    const request = await req.json();
    if (request) {
      const { name, username, emailormobile, password } = request;
      const findUserName = await userModel.findOne({ username });
      const findUserEmail = await userModel.findOne({ email: emailormobile });
      if (!findUserName && !findUserEmail) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        await userModel.create({
          name,
          username,
          email: emailormobile,
          password: hashedPassword,
        });
        return NextResponse.json({ message: "User Created" });
      } else {
        return NextResponse.json({ message: "User aleardy exist" });
      }
    } else {
      return NextResponse.json({ error: "Data not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};

export const PUT = async (req) => {
  try {
    console.log(req);
    return NextResponse.json({ Name: "Ummah" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};

export const DELETE = async (req) => {
  try {
    console.log(req);
    return NextResponse.json({ Name: "Ummah" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
};
