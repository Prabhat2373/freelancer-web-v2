import React, { useContext, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import StepLayout from "../../layout/freelancer/StepLayout";
import Button from "../../components/buttons/Button";
import { useOnboardingForm } from "@/contexts/FormContext";
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator";
import Container from "@/components/ui/Container";
import AddExperienceForm from "@/components/onboarding/form/AddExperienceForm";

const AddExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm();

  // const initialValues = {
  //   experience: formData?.experience || "",
  // };

  const initialValues = {
    experience: experiences,
  };

  const [showForm, setShowForm] = useState(false);
  return (
    <StepLayout
      title={"Add work your experiences."}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
      }
    >
      {/* <div>{showForm ? <AddExperienceForm /> : null}</div> */}
      {experiences.map((experience, index) => (
        <AddExperienceForm key={index} experience={experience} />
      ))}
      <Formik
        initialValues={initialValues}
        validationSchema={addExperienceValidation}
        enableReinitialize
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div className="flex flex-col">
            <label htmlFor="experience">Add Experience:</label>
            <Button
              variant="outlined"
              onClick={() => setShowForm(true)}
              className="flex px-24"
              type="button"
            >
              + Add Experience
            </Button>
            <div>
              <input id="no-experience" type="checkbox" />
              <label htmlFor="no-experience">No Experience</label>
            </div>
          </div>
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
      </Formik>
      {/* </Container> */}
    </StepLayout>
  );
};

export default AddExperience;
