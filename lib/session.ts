import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  DUMMY_ACCOUNTS,
  LOGIN_ROUTE,
  SESSION_COOKIE,
  type Role,
} from "@/lib/constant";

export type CurrentUser = {
  username: string;
  name: string;
  role: Role;
};

// Dummy session: the cookie only holds the username and is not signed, so it
// can be forged. Replace with a signed/encrypted session for real auth.
export function findAccount(username: string | undefined) {
  return DUMMY_ACCOUNTS.find((a) => a.username === username);
}

export async function getCurrentUser(): Promise<CurrentUser> {
  const username = (await cookies()).get(SESSION_COOKIE)?.value;
  const account = findAccount(username);
  if (!account) {
    redirect(LOGIN_ROUTE);
  }
  return { username: account.username, name: account.name, role: account.role };
}

export async function createSession(username: string) {
  (await cookies()).set(SESSION_COOKIE, username, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // one shift
  });
}

export async function deleteSession() {
  (await cookies()).delete(SESSION_COOKIE);
}
