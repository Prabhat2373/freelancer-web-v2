import React, { useCallback, useMemo } from "react"
import InputField from "@components/inputs/InputField"
import Button from "@components/buttons/Button"
import { FiKey, FiLock, FiMail } from "react-icons/fi"
import { useLoginMutation } from "@rtk/app/mainApi"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { LoginUser } from "../features/slices/userReducer"
import { useRouter } from "next/router"
import GuestLayout from "@/layout/GuestLayout"
import Link from "next/link"
import { loginValidation } from "@/validators/registration/registrationValidator"
import PageTransition from "@/containers/app/PageTransition"
import { USER_TYPES } from "@/constants/app.constant"
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Login] = useLoginMutation()
  const dispatch = useDispatch()
  //   const nav = useNavigate();
  const router = useRouter()

  const initialValues = useMemo(() => {
    // john.doe3@example.com
    // password123
    return {
      email: "prabhattambe10@gmail.com",
      password: "123456789",
    }
  }, [])

  const handleFreelancerLogin = () => {
    router.push("/fl/dashboard")
  }
  const handleClientLogin = () => {
    router.push("/fl/client")
  }

  const handleLogin = async (data) => {
    const res = await Login(data)
    console.log("response", res)
    console.log("role", res?.data?.data?.user_account?.role)
    console.log("status", res?.data?.status === "success")

    if (res?.data?.status === "success") {
      // dispatch(LoginUser(res?.data?.user_account))

      if (res?.data?.data?.user_account?.role === "freelancer") {
        console.log("freelanceLogin")
        router.push("/fl/dashboard")
        dispatch(LoginUser(res?.data?.user_account))
        handleFreelancerLogin()
      } else if (res?.data?.data?.user_account?.role === USER_TYPES.CLIENT) {
        dispatch(LoginUser(res?.data?.user_account))
        handleClientLogin()
      }
    }
  }
  return (
    <GuestLayout>
      <div className="flex justify-center h-[70vh] items-center flex-col px-30 ">
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          validateOnBlur
          validateOnChange
          onSubmit={handleLogin}
        >
          {({ values, handleChange, errors, handleSubmit }) => {
            return (
              <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="bg-off-white shadow-2xl px-32 py-10">
                  <div>
                    <h1 className="text-3xl font-bold">
                      Log in to your account
                    </h1>
                  </div>
                  <div className="flex gap-3 flex-col">
                    <Field
                      as={InputField}
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="email"
                      value={values.email}
                      icon={<FiMail className="text-gray-500 mr-2" />}
                    />
                    <ErrorMessage
                      name="email"
                      component={"div"}
                      className="text-red-500"
                    />
                    <Field
                      as={InputField}
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="password"
                      value={values.password}
                      icon={<FiLock />}
                    />
                    <ErrorMessage
                      name="password"
                      component={"div"}
                      className="text-red-500"
                    />

                    <div>
                      <Button type="submit">Login</Button>
                    </div>
                    <div>
                      Don’t have account?{" "}
                      <Link href={"/register"} className="text-orange">
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </GuestLayout>
  )
}

export default Login
