import Button from "@/components/buttons/Button";
import Stepper from "@/components/onboarding/Stepper";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import GuestLayout from "../GuestLayout";

const StepLayout = ({ title, subTitle, children }) => {
  return (
    <GuestLayout>
      <Stepper />
      <div>
        <h1 className="text-gray-900 text-xl font-medium font-montserrat">
          {title}
        </h1>
        <p>{subTitle}</p>
      </div>
      {children}
      {/* <div className="flex justify-center items-center py-12">
        <Button
          width="60%"
          variant="filled"
          className="flex px-24"
          type="submit"
          onClick={() => handleNext()}
        >
          Next
        </Button>
      </div> */}
    </GuestLayout>
  );
};

export default StepLayout;
