import React from "react";
import InputField from "@components/inputs/InputField";
import Button from "@components/buttons/Button";
import { FiKey, FiLock, FiMail } from "react-icons/fi";
import { useLoginMutation } from "@rtk/app/mainApi";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { LoginUser } from "../features/slices/userReducer";
import { useRouter } from "next/router";
import GuestLayout from "@/layout/GuestLayout";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Login] = useLoginMutation();
  const dispatch = useDispatch();
  //   const nav = useNavigate();
  const router = useRouter();
  const handleLogin = async (data) => {
    const res = await Login(data);
    if (res?.data?.success) {
      dispatch(LoginUser(res?.data?.user));

      if (res?.data?.user?.user_account?.role === "freelancer") {
        router.push("/fl/dashboard");
      } else if (res?.data?.user?.user_account?.role === "client") {
        router.push("/fl/client");
      }
    }
  };
  return (
    <GuestLayout>
      <div className="flex justify-center items-center flex-col px-30 ">
        <Formik
          initialValues={{
            email: "john.doe3@example.com",
            password: "password123",
          }}
          onSubmit={handleLogin}
        >
          {({ values, handleChange, errors, handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="bg-off-white shadow-2xl px-32 py-10">
                  <div>
                    <h1 className="text-3xl font-bold">
                      Log in to your account
                    </h1>
                  </div>
                  <div className="flex gap-3 flex-col">
                    <InputField
                      label="Email"
                      error="this is error"
                      type="email"
                      placeholder="email"
                      onChange={handleChange("email")}
                      value={values.email}
                      icon={
                        <>
                          <FiMail className="text-gray-500 mr-2" />
                        </>
                      }
                    />
                    <InputField
                      label="Email"
                      error="this is error"
                      type="password"
                      placeholder="password"
                      onChange={handleChange("password")}
                      value={values.password}
                      icon={<FiLock />}
                    />
                    <div>
                      <Button type="submit">Login</Button>
                    </div>
                    <div>
                      Don’t have account?{" "}
                      <span className="text-orange">Sign up</span>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </GuestLayout>
  );
};

export default Login;
