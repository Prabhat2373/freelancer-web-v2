import React, { ReactNode, Suspense, useEffect, useLayoutEffect } from "react"
import withFreelancerProtection from "../../hoc/freelancer/withFreelancerAuth"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"
import FreelancerLoading from "./loading"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { RootState } from "@/features/store/store"
import useAuth from "@/hoc/app/useAuth"
import PageTransitionLayout from "@/containers/app/PageTransition"
import { ToastContainer } from "react-toastify"

const AppFreelancerLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user)
  const { checkAuthorization } = useAuth()

  return (
    <div>
      <Navbar />
      <PageTransitionLayout>
        {/* <Suspense fallback={<FreelancerLoading />}> */}
        <main className="">{children}</main>
        {/* </Suspense> */}
        <ToastContainer />
      </PageTransitionLayout>
      <Footer />
    </div>
  )
}

export default withFreelancerProtection(AppFreelancerLayout)
// export default FreelancerLayout
