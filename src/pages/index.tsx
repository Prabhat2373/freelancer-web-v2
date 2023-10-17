"use client"
import { RootState } from "@/features/store/store"
import GuestLayout from "@/layout/GuestLayout"
import ClientLayout from "@/layout/client/ClientLayout"
import FreelancerLayout from "@/layout/freelancer/FreelancerLayout"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"


export default function Home() {
  const { user } = useSelector((state: RootState) => state.user)
  const router = useRouter()
  console.log('user',user);
  

  if (!user) {
    return router.replace("/login")
  }
  if (user?.role === "client") {
    return (
      <>
        <ClientLayout>Client Layout</ClientLayout>
      </>
    )
  } else if (user?.role === "freelancer") {
    return (
      <>
        <FreelancerLayout>Freelancer Layout</FreelancerLayout>
      </>
    )
  }
  return <GuestLayout>TEST</GuestLayout>
}
