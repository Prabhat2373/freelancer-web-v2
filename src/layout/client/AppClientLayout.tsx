import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import PageTransitionLayout from "@/containers/app/PageTransition"
import { RootState } from "@/features/store/store"
import { useRouter } from "next/router"
import { Suspense } from "react"
import { useSelector } from "react-redux"
import Loading from "./loading"
import withClientAuth from "@/hoc/client/withClientAuth"

const AppClientLayout = ({ children }) => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user)

  return (
    <div>
      <Navbar />
      <PageTransitionLayout>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </PageTransitionLayout>
      <Footer />
    </div>
  )
}

export default withClientAuth(AppClientLayout)
