import mongoose from "mongoose";

export const connect = async () => {
  await mongoose.connect(`${process.env.MONGOURI}/Ummah`);
  console.log("Database Connection successful");
};
