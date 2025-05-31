"use server";
import { getAuthCookies } from "@/actions";
import { API_URL } from "@/config";

export async function fetcher(route: string) {
  try {
    const { token } = await getAuthCookies();
    const response = await fetch(`${API_URL}/${route}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.log("🚀 ~ fetcher ~ error:", error);
  }
}
