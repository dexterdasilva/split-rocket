import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") return NextResponse.next();
  const language = request.headers.get("accept-language")?.toLowerCase().startsWith("es") ? "es" : "en";
  return NextResponse.redirect(new URL(`/${language}`, request.url));
}

export const config = { matcher: ["/"] };
