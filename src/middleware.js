import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    const origin = request.headers.get("origin");
    const allowedOrigins = ["http://localhost:3000", "https://neranjana.me"];

    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(null, {
        status: 403,
        statusText: "Forbidden",
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    const response = NextResponse.next();
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "same-origin");

    return response;
  }

  return NextResponse.next();
}
