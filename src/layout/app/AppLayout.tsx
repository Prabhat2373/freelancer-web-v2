import { AnimatePresence } from "framer-motion"
import AppSuspense from "../../components/suspense/AppSuspense"
import Layout from "../Layout"
import React, { useEffect } from "react"
import { useRouter } from "next/router"
import PageTransitionLayout from "@/containers/app/PageTransition"
import { useSelector } from "react-redux"
import { RootState } from "@/features/store/store"

const AppLayout = (props: any) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user)
  const router = useRouter()
  const pageKey = router.asPath

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace("/login")
  //   }
  // }, [router])
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  )
}

export default AppLayout
