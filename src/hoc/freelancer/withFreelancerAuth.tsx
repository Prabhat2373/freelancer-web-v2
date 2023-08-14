import React, {
  type ComponentType,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { RootState } from "@/features/store/store";
import { USER_TYPES } from "@/constants/appConstants";
import AppLayout from "@/layout/app/AppLayout";

const withFreelancerAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentwithFreelancerAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    // const user = useSelector((state: RootState) => state.user.user)
    const { user, isLoggedIn } = useSelector((state: RootState) => state.user);
    console.log("isLoading", isLoading);
    console.log("__user", user);
    // console.log("USER_TYPE", user?.user_type);

    // const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const toastId = "clientToastId";

    const checkAuth = useCallback(() => {
      if (!isLoggedIn) {
        router.replace("/login");
        // toast.error("Please Log in to access", { toastId });
        return;
      }

      if (user?.user_account?.role === USER_TYPES.FREELANCER) {
        setIsLoading(false);
        return;
      }

      if (user?.user_account?.role === USER_TYPES.CLIENT) {
        setIsLoading(false);
        return;
      }
      if (user?.user_account?.role !== USER_TYPES.FREELANCER) {
        if (user?.user_account?.role === USER_TYPES.CLIENT)
          router.replace("/cl");
        // toast.error("You are not allowed to access this page.", { toastId });
        return;
      }

      setIsLoading(false);
    }, [isLoggedIn, user, router]);

    useEffect(() => {
      checkAuth();
    }, [checkAuth]);

    return isLoading ? (
      <>
        <h1>Loading..</h1>
      </>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  return React.memo(ComponentwithFreelancerAuth);
};

export default withFreelancerAuth;
