import Button from "@/components/buttons/Button";
import InputField from "@/components/inputs/InputField";
import { useOnboardingForm } from "@/contexts/FormContext";
import GuestLayout from "@/layout/GuestLayout";
import StepLayout from "@/layout/freelancer/StepLayout";
import { Form, Formik } from "formik";
// import InputField from "../../components/inputs/InputField";

import * as yup from "yup";

const TitleStep = () => {
  const {
    activeStepIndex,
    formData,
    setActiveStepIndex,
    setFormData,
    handleNext,
  } = useOnboardingForm();
  const ValidationSchema = yup.object().shape({
    title: yup.string().required(),
  });
  return (
      <StepLayout
        subTitle={"lorem lorem lorem"}
        title={"First, add a title to tell the world what you do."}
      >
        <div>
          <Formik
            onSubmit={(values) => {
              console.log("valuasdes", values);
              setActiveStepIndex(activeStepIndex + 1);

              const data = { ...formData, ...values };
              setFormData(data);
              handleNext();
            }}
            initialValues={{ title: "" }}
            validationSchema={ValidationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <InputField
                    placeholder="Give title"
                    onChange={formik.handleChange("title")}
                    name="title"
                    id="title"
                    value={formik.values.title}
                  />
                  <div className="flex justify-center items-center py-12">
                    <Button
                      width="60%"
                      variant="filled"
                      className="flex px-24"
                      type="submit"
                    >
                      Next
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </StepLayout>
  );
};

export default TitleStep;
