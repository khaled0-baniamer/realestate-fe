"use server";
import { apiClient, apiEndPoint } from "@/app/api/apiConfig";
import { FormData } from "@/components/SignUpForm/signupSchema";
import { User } from "@/types";
import { setAuthCookies } from "../auth";

type Input = Omit<FormData, "confirmPassword">;
type SignupResponse = {
  user: User;
  access_token: string;
};

async function signupServerAction(input: Input): Promise<SignupResponse> {
  try {
    const register = await apiClient(apiEndPoint.SIGNUP, {
      method: "POST",
      body: JSON.stringify(input),
    });

    if ([200, 201].includes(register.status)) {
      const response = (await register.json()) as SignupResponse;
      await setAuthCookies(response.access_token);
      return response;
    } else {
      const errorData = await register.json();
      throw new Error(
        `Error: ${errorData?.error?.message || "Unknown error occurred"}`
      );
    }
  } catch (error: any) {
    console.error("🚀 ~ signupServerAction ~ error:", error);

    throw new Error(
      error?.message || "An unexpected error occurred during signup"
    );
  }
}

export type { SignupResponse };
export { signupServerAction };
