"use server";

import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "@/lib/constant";
import { deleteSession } from "@/lib/session";

export async function logout() {
  await deleteSession();
  redirect(LOGIN_ROUTE);
}
