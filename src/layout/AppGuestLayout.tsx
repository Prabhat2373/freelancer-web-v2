import React from "react"
import dynamic from "next/dynamic"
// const Navbar = dynamic(() => import("../components/layout/Navbar"), {
//   ssr: false,
// });
import Footer from "../components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import PageTransitionLayout from "@/containers/app/PageTransition"
import { ToastContainer } from "react-toastify"

const AppGuestLayout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <PageTransitionLayout>
        <div className="">{children}</div>
        <ToastContainer />
      </PageTransitionLayout>
      <Footer />
    </div>
  )
}

export default AppGuestLayout
