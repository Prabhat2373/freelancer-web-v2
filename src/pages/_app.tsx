import { FormContextProvider } from "@/contexts/FormContext"
import { useLazyGetAccountQuery } from "@/features/rtk/app/userApi"
import { setStoreUser } from "@/features/slices/userReducer"
import { RootState, store } from "@/features/store/store"
import { ReactElement } from "react"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { Provider, useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import { NextPageWithLayout } from "@/types/app"
import AppLayout from "@/layout/app/AppLayout"
const MyApp = ({ children }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  // const role = "freelancer"
  const { user, isLoggedIn } = useSelector((state: RootState) => state.user)
  console.log("user", user)
  const [getAccount] = useLazyGetAccountQuery()

  const templateFn = (strings: TemplateStringsArray, name: string) => {
    console.log("strings", strings, "name", name)
  }
  const name = "Prabhat"
  templateFn`this is my name : ${name}`

  useEffect(() => {
    if (isLoggedIn) {
      getAccount("").then((res) => {
        dispatch(setStoreUser(res?.data?.data))
      })
    }
    if (!isLoggedIn) {
    }
  }, [isLoggedIn])

  // const role = user?.role
  // let allowed = true
  // if (router.pathname.startsWith("/fl") && role !== "freelancer") {
  //   allowed = false
  // }
  // if (router.pathname.startsWith("/cl") && role !== "client") {
  //   allowed = false
  // }

  // useEffect(() => {
  //   if (role === "freelancer") {
  //     router.push("/fl");
  //   }
  // }, [role, router]);
  return <>{children}</>
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  const router = useRouter()
  const pageKey = router.asPath

  return (
    <Provider store={store}>
      <FormContextProvider>
        <MyApp>
          <AppLayout>
            <Component {...pageProps} key={pageKey} />
          </AppLayout>
        </MyApp>
      </FormContextProvider>
    </Provider>
  )
}
