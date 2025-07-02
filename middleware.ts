
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("login")?.value;
  const pathname = request.nextUrl.pathname;

 
  if (pathname.startsWith("/Admin") && !token && !pathname.startsWith("/Admin/Login")) {
    return NextResponse.redirect(new URL("/Admin/Login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Admin/:path*"], 
};
