import dbConnect from "@/lib/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();

    return NextResponse.json({ success: true, message: "Hello world" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
