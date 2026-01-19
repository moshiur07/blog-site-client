import { cookies } from "next/headers";

export const userService = {
  getSession: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
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
