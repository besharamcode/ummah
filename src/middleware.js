import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function middleware(req) {
  try {
    const cookieStore = cookies();
    const headerList = headers();
    // console.log(cookieStore,headerList)
    if (req.nextUrl.pathname.startsWith("/home")) {
      try {
        const token = "done"
        if (!token) {
          return NextResponse.json(
            {
              error: "please try again with correct token",
            },
            { status: 401 }
          );
        } else {
          const data = jwt.verify(token, process.env.JWT_UV_KEY);
          console.log(data);
          req.user = data.userid;
          return NextResponse.next();
        }
      } catch (error) {
        console.log(error);
        return NextResponse.json({
          error: "internal server error",
        });
      }
    }

    if (req.nextUrl.pathname.startsWith("/dashboard")) {
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "internal server error",
    });
  }
}
