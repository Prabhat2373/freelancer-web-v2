import React, { ReactNode, Suspense } from "react"
import withFreelancerProtection from "../../hoc/freelancer/withFreelancerAuth"
import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"
import FreelancerLoading from "./loading"

const FreelancerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<FreelancerLoading />}>
        <main className="">{children}</main>
      </Suspense>
      <Footer />
    </div>
  )
}

// export default withFreelancerProtection(FreelancerLayout)
export default FreelancerLayout
