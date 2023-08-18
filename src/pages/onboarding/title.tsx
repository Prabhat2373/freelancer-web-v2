import Button from "@/components/buttons/Button";
import InputField from "@/components/inputs/InputField";
import { useOnboardingForm } from "@/contexts/FormContext";
import { useUpdateAccountMutation } from "@/features/rtk/app/userApi";
import StepLayout from "@/layout/freelancer/StepLayout";
import { statusHandler } from "@/utils/utils";
import { titleStepValidation } from "@/validators/onboarding/onboardingValidator";
import { Form, Formik } from "formik";
// import InputField from "../../components/inputs/InputField";

const TitleStep = () => {
  const { handleNext, handleFormSubmit, formData } = useOnboardingForm();

  const initialValues = { title: formData?.title ?? "" };
  const [updateAccont, { isLoading }] = useUpdateAccountMutation();

  const handleUpdate = async (data) => {
    console.log("valuasdes", data);
    // setActiveStepIndex(activeStepIndex + 1);
    const res = await updateAccont(data);
    if (statusHandler(res).isSuccess()) {
      console.log("response", res);
      handleNext();
    }
    // const payload = { ...formData, ...data };
    // setFormData(payload);
    // handleNext();
  };
  console.log("formData", formData);

  return (
    <StepLayout
      subTitle={"lorem lorem lorem"}
      title={"First, add a title to tell the world what you do."}
    >
      <div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          enableReinitialize
          validationSchema={titleStepValidation}
        >
          {({ values, errors, handleChange }) => {
            return (
              <Form>
                <InputField
                  placeholder="Give title"
                  onChange={handleChange}
                  name="title"
                  id="title"
                  value={values.title}
                  error={errors.title}
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
