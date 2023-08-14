import { FormContextProvider } from "@/contexts/FormContext";
import { store } from "@/features/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Provider } from "react-redux";

const MyApp = ({ children }: any) => {
  const router = useRouter();
  const role = "freelancer";

  // useEffect(() => {
  //   if (role === "freelancer") {
  //     router.push("/fl");
  //   }
  // }, [role, router]);
  return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <FormContextProvider>
        
        <MyApp>
          <Component {...pageProps} />
        </MyApp>
      </FormContextProvider>
    </Provider>
  );
}
