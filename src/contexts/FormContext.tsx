import {
  useLazyGetAccountQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi";
import { statusHandler } from "@/utils/utils";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

interface FormData {
  // Define the structure of your form data

  // const initialValues = {
  username: "";
  firstName: "";
  lastName: "";
  email: "";
  password: "";
  registration_date: "";
  location: "";
  overview: "";
  skills: [];
  language: "";
  country: "";
  title: "";
  experience: "";
  education: "";
  description: "";
  hourly_rate: 0;
  address: "";
  phone: "";
  role?: "";
}

interface FormContextProps {
  activeStepIndex: number;
  setActiveStepIndex: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleNext: () => void;
  handleFormSubmit: (data: any) => Promise<void>;
  handleBack: () => void;
}

export const FormContext = createContext<FormContextProps>({
  activeStepIndex: 0,
  setActiveStepIndex: () => {},
  formData: {},
  setFormData: () => {},
  handleNext: () => {},
  handleFormSubmit: (data: any) => {},
  handleBack: () => {},
});

export const FormContextProvider = ({ children }) => {
  // const activeStep = window.localStorage.getItem("activeStepIndex");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});

  const [updateAccont, { isLoading }] = useUpdateAccountMutation();
  const [getAccount] = useLazyGetAccountQuery();

  useEffect(() => {
    if (formData) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("onboarding", JSON.stringify(formData));
      }
    }
  }, [activeStepIndex]);
  const router = useRouter();

  const { pathname } = router;
  const onboardingLinks = [
    {
      title: "First, add a title to tell the world what you do.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.",
      href: "/onboarding/title",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-experience",
      check: "experience",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-education",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-languages",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-skills",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-description",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/add-rate",
      check: "title",
      required: true,
      isSkippable: false,
    },
    {
      title: "First, add a title to tell the world what you do.",
      href: "/onboarding/contact-info",
      check: "title",
      required: true,
      isSkippable: false,
    },
  ];

  useEffect(() => {
    onboardingLinks.forEach((link, index) => {
      if (link.href.includes(pathname)) {
        setActiveStepIndex(index);
      }
    });
  }, [router]);
  const handleNext = () => {
    getAccount("").then((response) => {
      setFormData(response?.data?.data);
    });
    const { href } = onboardingLinks[activeStepIndex + 1];
    setActiveStepIndex(activeStepIndex + 1);
    router.push(href);
  };

  const handleBack = () => {
    const { href } = onboardingLinks[activeStepIndex - 1];
    setActiveStepIndex(activeStepIndex - 1);
    router.push(href);
  };

  const handleFormSubmit = async (data) => {
    console.log("valuasdes", data);
    // setActiveStepIndex(activeStepIndex + 1);
    const res = await updateAccont(data);
    if (statusHandler(res).isSuccess()) {
      console.log("response", res);
      handleNext();
    }
  };

  return (
    <FormContext.Provider
      value={{
        activeStepIndex,
        setActiveStepIndex,
        formData,
        setFormData,
        handleNext,
        handleFormSubmit,
        handleBack,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useOnboardingForm = () => {
  return useContext(FormContext);
};
