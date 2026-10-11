"use server";

import { redirect } from "next/navigation";
import { DUMMY_ACCOUNTS, HOME_ROUTE } from "@/lib/constant";
import { createSession } from "@/lib/session";

export type LoginState = {
  error?: string;
  username?: string;
};

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const account = DUMMY_ACCOUNTS.find(
    (a) => a.username === username && a.password === password,
  );

  if (!account) {
    return { error: "Invalid username or password.", username };
  }

  await createSession(account.username);
  redirect(HOME_ROUTE);
}
