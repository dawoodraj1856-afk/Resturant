import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const isAuth = request.cookies.get("auth")?.value;
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ["/profile", "/orderonline"];

  if (protectedRoutes.includes(pathname) && !isAuth) {
    return NextResponse.redirect(new URL("/signup", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/orderonline"],
};

