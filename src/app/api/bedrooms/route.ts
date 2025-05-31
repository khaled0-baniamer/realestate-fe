import { NextResponse } from "next/server";
import { apiEndPoint, fetcher } from "../apiConfig";


export async function GET() {
  try {
    const data = await fetcher(apiEndPoint.BEDROOMS);
    return NextResponse.json(data);
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
