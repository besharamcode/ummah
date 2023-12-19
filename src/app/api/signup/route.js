import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    return NextResponse.json({ Name: "Ummah" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
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
