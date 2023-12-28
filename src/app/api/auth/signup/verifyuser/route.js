import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const POST = async (req) => {
  try {
    const jwtToken = req.nextUrl.searchParams.get("jwt");
    if (!jwtToken) {
      return NextResponse.json(
        {
          error: "please try again with correct token",
        },
        { status: 401 }
      );
    } else {
      const data = jwt.verify(jwtToken, process.env.JWT_UV_KEY);
      const verifyuser = await userModel.findById(data.userid);
      if (verifyuser === null) {
        return NextResponse.json({ error: "User not found" });
      } else if (verifyuser.isVerified) {
        return NextResponse.json({ error: "User already verified" });
      } else {
        const verifiedUser = await userModel.findByIdAndUpdate(verifyuser._id, {
          $set: { isVerified: true },
        });
        return NextResponse.json({
          isAuth: true,
          redirect: `/in/auth/${verifiedUser.username}/details`,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};
