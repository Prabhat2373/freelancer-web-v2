import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

type TUserRole = "freelancer" | "client"

export function middleware(request: NextRequest) {
  const isLoggedIn = false
  const role: "freelancer" | "client" = "client"
  console.log("rolerolerole", role)

  if (!isLoggedIn) {
    return NextResponse.redirect("/login")
  }

  if (role === "freelancer" && request.nextUrl.pathname.startsWith("/cl")) {
    // return NextResponse.redirect(request.headers.get("Referer") || "/fl")
    return NextResponse.redirect(new URL("/fl", request.url))
  }
  // If the user is a client and is trying to access a freelancer page, redirect them back to their previous route
  if (role === "client" && request.nextUrl.pathname.startsWith("/fl")) {
    // return NextResponse.redirect(request.headers.get("Referer") || "/cl")
    return NextResponse.redirect(new URL("/cl", request.url))
  }
}
