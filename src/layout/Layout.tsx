import { ReactNode, useEffect } from "react"
import { useSelector } from "react-redux"
// import { RootState } from "../store";
import { RootState } from "@/features/store/store"
import { useRouter } from "next/router"
import AppGuestLayout from "./AppGuestLayout"
import AppClientLayout from "./client/AppClientLayout"
import AppFreelancerLayout from "./freelancer/AppFreelancerLayout"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const { isLoggedIn, role, user } = useSelector(
    (state: RootState) => state.user
  )

  useEffect(() => {
    const pagePath = router.pathname
    console.log("role", role === "freelancer")

    if (pagePath.startsWith("/fl") && role === "freelancer") {
      return <AppFreelancerLayout>{children}</AppFreelancerLayout>
    } else if (pagePath.startsWith("/cl") && role === "client") {
      return <AppClientLayout>{children}</AppClientLayout>
    } else if (
      (pagePath.startsWith("/fl") && role !== "freelancer") ||
      (pagePath.startsWith("/cl") && role !== "client")
    ) {
      router.replace("/login")
    }
  }, [])
  return <AppGuestLayout>{children}</AppGuestLayout>
}

export default Layout
