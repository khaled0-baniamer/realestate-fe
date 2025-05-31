"use server";
import { apiClient, apiEndPoint } from "@/app/api/apiConfig";
import { setAuthCookies } from "../auth";

type Input = {
  email: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
};

async function loginServerAction(input: Input) {
  try {
    const login = await apiClient(apiEndPoint.LOGIN, {
      method: "POST",
      body: JSON.stringify(input),
    });
    if ([200, 201].includes(login.status)) {
      const response = (await login.json()) as LoginResponse;
      await setAuthCookies(response.access_token);
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

export { loginServerAction };
