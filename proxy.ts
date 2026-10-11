import { NextResponse, type NextRequest } from "next/server";
import { HOME_ROUTE, LOGIN_ROUTE, SESSION_COOKIE } from "@/lib/constant";
import { findAccount } from "@/lib/session";

// Optimistic route guard. Server Actions must still check the session
// themselves (see app/(app)/actions.ts).
export function proxy(request: NextRequest) {
  const account = findAccount(request.cookies.get(SESSION_COOKIE)?.value);
  const { pathname } = request.nextUrl;

  if (!account) {
    return NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));
  }

  if (pathname.startsWith("/settings") && account.role !== "admin") {
    return NextResponse.redirect(new URL(HOME_ROUTE, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/form/:path*", "/settings/:path*"],
};
