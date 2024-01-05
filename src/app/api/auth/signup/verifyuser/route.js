import { userModel } from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { getCookies } from "cookies-next";

// export const GET = async (req) => {
  export const POST = async (req) => {
  try {
    const jwtToken = req.nextUrl.searchParams.get("jwt");
    const cookieStore = cookies();
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
        cookieStore.set("UV_Token", jwtToken);
        return NextResponse.json({
          isAuth: true,
          path: `/in/auth/details/${verifiedUser.username}`,
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};
