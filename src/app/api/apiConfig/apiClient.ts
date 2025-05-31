"use server";

import { getAuthCookies } from "@/actions";
import { API_URL } from "@/config";

const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept-Language": "en",
};

export const apiClient = async (url: string, options: RequestInit = {}) => {
  const { token } = await getAuthCookies();
  const headers = {
    Authorization: `Bearer ${token}`,
    ...defaultHeaders,
    ...options.headers,
  };

  const updatedOptions = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_URL}/${url}`, updatedOptions);
    return response;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};
