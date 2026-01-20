import { env } from "@/env";

import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
      });
      const session = await res.json();
      return { data: session, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          message: "Can not fetch the data",
          error,
        },
      };
    }
  },
};
