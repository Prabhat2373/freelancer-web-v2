import * as Yup from "yup"

export const titleStepValidation = Yup.object().shape({
  title: Yup.string().required("Title is Required"),
})

export const addExperienceValidation = Yup.object().shape({
  experience: Yup.array().of(
    Yup.object().shape({
      company_name: Yup.string().required("Company name is required"),
      position: Yup.string().required("Position is required"),
      description: Yup.string(),
      skills_used: Yup.array().of(Yup.string()),
      start_date: Yup.date().required("Start date is required"),
      end_date: Yup.date().when(
        "currently_working",
        (currentlyWorking, schema) => {
          return !currentlyWorking
            ? schema.required("End date is required")
            : schema.nullable()
        }
      ),
      currently_working: Yup.boolean(),
    })
  ),
})
