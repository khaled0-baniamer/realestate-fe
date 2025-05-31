"use server";;
import { apiClient, apiEndPoint } from "@/app/api/apiConfig";

type Input = {
  listingId: number;
  date: string;
  time: string;
};

async function bookAppointment(input: Input) {
  console.log("🚀 ~ bookAppointment ~ input:", input)
  try {
    const login = await apiClient(apiEndPoint.APPOINTMENT, {
      method: "POST",
      body: JSON.stringify(input),
    });
    if ([200, 201].includes(login.status)) {
      const response = await login.json();
      return response;
    } else {
      const errorData = await login.json();
      throw new Error(
        `Error: ${errorData?.error?.message || "Unknown error occurred"}`
      );
    }
  } catch (error: any) {
    throw new Error(
      error?.message || "An unexpected error occurred during signup"
    );
  }
}

export { bookAppointment };
