import AddExperienceForm from "@/components/onboarding/form/AddExperienceForm"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useOnboardingForm } from "@/contexts/FormContext"
import { addExperienceValidation } from "@/validators/onboarding/onboardingValidator"
import { Form, Formik } from "formik"
import { useState, useMemo } from "react"

import Button from "../../components/buttons/Button"
import StepLayout from "../../layout/freelancer/StepLayout"
import {
  useLazyDeleteExperienceQuery,
  useUpdateAccountMutation,
} from "@/features/rtk/app/userApi"
import { statusHandler } from "@/utils/utils"
import { Case, Switch } from '@/components/utils/Conditional'

const AddExperience = () => {
  const {
    formData,

    handleFormSubmit,
  } = useOnboardingForm()
  const [experiences, setExperiences] = useState(
    formData?.employment_history || []
  )
  const [updateAccont] = useUpdateAccountMutation()
  const [deleteExperience, { isLoading: isDeleteExperienceLoading }] =
    useLazyDeleteExperienceQuery()

  console.log("formData", formData)

  // const initialValues = {
  //   experience: [
  //     {
  //       company_name: "",
  //       position: "",
  //       employment_type: "",
  //       start_date: null,
  //       end_date: null,
  //       currently_working: false,
  //       description: "",
  //       skills_used: [],
  //     },
  //   ],
  // }
  const initialValues = {
    experience: experiences,
  }

  const [showForm, setShowForm] = useState(false)

  const handleAddClick = () => {
    setShowForm(true)
    setExperiences([...experiences, initialValues.experience])
  }

  const handleDeleteForm = async (deletedIndex: number) => {
    const updatedExperience = experiences.find((_, idx) => idx === deletedIndex)
    // const payload = { ...updatedExperience, _id: undefined }
    // console.log("payload", payload)

    const response = await deleteExperience(updatedExperience?._id)
    if (statusHandler(response).isSuccess()) {
      // setExperiences(response?.data?.data)

    }
  }

  const handleNoExperience = () => {
    setExperiences([])
  }

  console.log("initialValues", initialValues)

  return (
    <StepLayout
      title={"Add work your experiences."}
      subTitle={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod."
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={addExperienceValidation}
        enableReinitialize
        onSubmit={(data) => {
          const payload = { employment_history: [...data.experience] }
          handleFormSubmit(payload)
        }}
      >
        {({ values, errors }) => {
          console.log("values", values)
          console.log("errors", errors)

          return (
            <Form>
              <>
                {experiences.map((experience, index) => (
                  <AddExperienceForm
                    key={index}
                    experience={experience}
                    handleDeleteForm={handleDeleteForm}
                    index={index}
                  />
                ))}

                <Switch>
                  <Case condition=''> </Case>
                </Switch>
                <div className="flex flex-col">
                  <label htmlFor="experience">Add Experience:</label>
                  <Button
                    variant="outlined"
                    onClick={handleAddClick}
                    className="flex px-24"
                    type="button"
                  >
                    + Add Experience
                  </Button>
                </div>
                <div>
                  <Checkbox
                    id="experience"
                    onChange={(e) => {
                      console.log("event", e)
                    }}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        handleNoExperience()
                      }
                    }}
                    // onClick={handleNoExperience}
                    name="experience"
                  />
                  <Label htmlFor="experience">No Experience</Label>
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
              </>
            </Form>
          )
        }}
      </Formik>
      {/* </Container> */}
    </StepLayout>
  )
}

export default AddExperience
