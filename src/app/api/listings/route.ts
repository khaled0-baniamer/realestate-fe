import { NextRequest, NextResponse } from "next/server";
import { apiClient, apiEndPoint } from "../apiConfig";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = Object.fromEntries(searchParams.entries());

    const numberArrayKeys = [
      "bedroomId",
      "bathroomId",
      "districtId",
      "furnishedId",
      "typeId",
    ];

    let obj: any = { ...queryParams };
    for (const key in queryParams) {
      if (numberArrayKeys.includes(key)) {
        obj = { ...obj, [key]: queryParams[key].split(",") };
      }
    }
    const data = await apiClient(apiEndPoint.LISTINGS_SEARCH, {
      method: "POST",
      body: JSON.stringify(obj),
    });

    const response = await data.json();
    return NextResponse.json(response);
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
