import * as Yup from "yup";

export const titleStepValidation = Yup.object().shape({
  title: Yup.string().required(),
});

export const addExperienceValidation = Yup.object({
  experience: Yup.string().required("Experience is required"),
});
