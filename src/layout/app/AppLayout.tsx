import { AnimatePresence } from "framer-motion"
import AppSuspense from "../../components/suspense/AppSuspense"
import Layout from "../Layout"
import React from "react"
import { useRouter } from "next/router"
import PageTransitionLayout from "@/containers/app/PageTransition"

const AppLayout = (props: any) => {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <>
      <Layout>{props.children}</Layout>
    </>
  )
}

export default AppLayout
