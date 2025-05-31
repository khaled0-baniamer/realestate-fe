"use server";

import { cookies } from "next/headers";

async function setAuthCookies(accessToken: string) {
  const cookieStore = await cookies();

  cookieStore.set("token", accessToken);
}

async function getAuthCookies() {
  const cookieStore = await cookies();
  return {
    token: cookieStore.get("token")?.value,
  };
}

async function clearCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}

export { setAuthCookies, getAuthCookies  , clearCookies};
