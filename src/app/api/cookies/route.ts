import { NextResponse } from "next/server";
import { getAuthCookies } from "@/actions";

export async function GET() {
  try {
    const { token } = await getAuthCookies();
    if (token) {
      return NextResponse.json(token);
    } else {
      return NextResponse.json(null);
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
