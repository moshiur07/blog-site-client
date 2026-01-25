import { env } from "@/env";
import { createAuthClient } from "better-auth/react";

// Use the NEXT_PUBLIC_ version for client-side
const BACKEND_URL = env.NEXT_PUBLIC_BACKEND_URL;

export const authClient = createAuthClient({
  baseURL: BACKEND_URL,
});
