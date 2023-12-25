import { userModel } from "@/models/users";

export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log(body)
    const findUser = await userModel.findOne(body.email);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "internal server error" });
  }
};
