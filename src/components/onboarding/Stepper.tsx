import { useOnboardingForm } from "@/contexts/FormContext";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

function Stepper() {
  const { activeStepIndex, setActiveStepIndex } = useOnboardingForm();
  const totalSteps = 8;

  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");

    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  const progressValue = `${((activeStepIndex + 1) / totalSteps) * 100}`;

  console.log("progressValue", progressValue);

  return (
    <div className=" flex flex-col items-center justify-center px-32 ">
      <div className="w-2/3">
        <div className="w-full">
          <div className="flex items-center justify-between w-full mb-4">
            <button
              type="button"
              className="flex items-center text-indigo-500"
              onClick={() => {
                if (activeStepIndex > 0) {
                  setActiveStepIndex(activeStepIndex - 1);
                }
              }}
            >
              <FiArrowLeft className="mr-1" />
              Back
            </button>
            <div className="text-center font-medium text-gray-500">
              Step {activeStepIndex + 1} of {totalSteps}
            </div>
          </div>
        </div>
        <div className="w-full">
          <progress
            id="stepperProgress"
            style={{ color: "red" }}
            className="w-full h-2 bg-gray-200 rounded-full"
            value={progressValue}
            max="100"
          />
        </div>
      </div>
    </div>
  );
}

export default Stepper;
