import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { AUTH } from "./constants/app.constant"

type TUserRole = "freelancer" | "client"

export function middleware(request: NextRequest, response: NextResponse) {
  const secretKey = "my-secret-key-prabhat-secret"

  // const isLoggedIn = false
  // const role: "freelancer" | "client" = "client"
  // console.log("rolerolerole", role)
  // if (!isLoggedIn) {
  //   return NextResponse.redirect("/login")
  // }
  const role = request.cookies.get("role")
  const token = request.cookies.get(AUTH.TOKEN)

  // if (!token && request.nextUrl.pathname !== "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url))
  // }
  if (
    role?.value === "freelancer" &&
    request.nextUrl.pathname.startsWith("/cl")
  ) {
    // return NextResponse.redirect(request.headers.get("Referer") || "/fl")
    return NextResponse.redirect(new URL("/fl", request.url))
  }

  if (role?.value === "client" && request.nextUrl.pathname.startsWith("/fl")) {
    // return NextResponse.redirect(request.headers.get("Referer") || "/fl")
    return NextResponse.redirect(new URL("/cl", request.url))
  }
  // // If the user is a client and is trying to access a freelancer page, redirect them back to their previous route
  // if (role === "client" && request.nextUrl.pathname.startsWith("/fl")) {
  //   // return NextResponse.redirect(request.headers.get("Referer") || "/cl")
  //   return NextResponse.redirect(new URL("/cl", request.url))
  // }
}
