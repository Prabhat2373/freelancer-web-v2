import { FormContextProvider } from "@/contexts/FormContext"
import { useLazyGetAccountQuery } from "@/features/rtk/app/userApi"
import { setStoreUser } from "@/features/slices/userReducer"
import { RootState, store } from "@/features/store/store"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Provider, useDispatch, useSelector } from "react-redux"

const MyApp = ({ children }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const role = "freelancer"
  const { user, isLoggedIn } = useSelector((state: RootState) => state.user)
  console.log("user", user)
  const [getAccount] = useLazyGetAccountQuery()

  useEffect(() => {
    if (isLoggedIn) {
      getAccount("").then((res) => {
        dispatch(setStoreUser(res?.data?.data))
      })
    }
  }, [isLoggedIn])

  // useEffect(() => {
  //   if (role === "freelancer") {
  //     router.push("/fl");
  //   }
  // }, [role, router]);
  return <>{children}</>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FormContextProvider>
        <MyApp>
          <Component {...pageProps} />
        </MyApp>
      </FormContextProvider>
    </Provider>
  )
}
