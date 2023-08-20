import InputField from "@/components/inputs/InputField"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePicker } from "@/components/ui/datePicker"
import { Label } from "@/components/ui/label"
import { ErrorMessage, useFormikContext } from "formik"
import Select from "react-select"

const AddExperienceForm = ({ experience, handleDeleteForm, index }) => {
  const formik = useFormikContext()
  console.log(
    "experienceError",
    formik.errors.experience?.[index]?.company_name
  )

  return (
    // <div>
    //   <InputField
    //     name="title"
    //     onChange={formik.handleChange}
    //     placeholder="Designation"
    //     label="Title"
    //   />
    //   <div className="grid grid-cols-2 gap-3">
    //     <div>
    //       <InputField
    //         name="company"
    //         placeholder="Enter Company Name"
    //         label="Company"
    //         onChange={formik.handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label>Employment Type </label>
    //       <Select
    //         name="emplyment_type"
    //         placeholder="Part Time"
    //         onChange={(value) =>
    //           formik.setFieldValue("employment_type", value?.value)
    //         }
    //         options={[
    //           { label: "Full Time", value: "full_time" },
    //           { label: "Part Time", value: "part_time" },
    //         ]}
    //       />
    //     </div>
    //   </div>
    //   <div>
    //     <Label>Description</Label>
    //     <Textarea name="description" />
    //   </div>
    //   {experience?.length >= 1 ? (
    //     <div className="flex justify-end my-2">
    //       <button
    //         // variant="outlined"
    //         type="button"
    //         onClick={() => handleDeleteForm(index)}
    //       >
    //         <XSquare />
    //       </button>
    //     </div>
    //   ) : null}
    // </div>
    <div className="mb-4">
      <InputField
        name={`experience[${index}].position`}
        placeholder="Designation"
        label="Position"
        onChange={formik.handleChange}
        value={formik.values?.experience?.[index]?.position || ""}
        // error={formik.errors.experience?.[index]?.position}
      />
      <ErrorMessage
        name={`experience[${index}].position`}
        component={"div"}
        className="text-red-500"
      />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <InputField
            name={`experience[${index}].company_name`}
            placeholder="Enter Company Name"
            label="Company"
            onChange={formik.handleChange}
            value={formik.values?.experience?.[index]?.company_name || ""}
            error={formik.errors.experience?.[index]?.company_name}
          />
          <ErrorMessage
            name={`experience[${index}].company_name`}
            component={"div"}
            className="text-red-500"
          />
        </div>
        <div>
          <label>Employment Type</label>
          <Select
            name={`experience[${index}].employment_type`}
            placeholder="Part Time"
            onChange={(option) => {
              formik.setFieldValue(
                `experience[${index}].employment_type`,
                option?.value
              )
            }}
            options={[
              { label: "Full Time", value: "full_time" },
              { label: "Part Time", value: "part_time" },
            ]}
          />
          <ErrorMessage
            name={`experience[${index}].employment_type`}
            component={"div"}
            className="text-red-500"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label>Joined Date</label>
        <DatePicker
          name={`experience[${index}].start_date`}
          placeholder="Select Joined Date"
          onChange={(date) =>
            formik.setFieldValue(`experience[${index}].start_date`, date)
          }
          value={
            formik.values?.experience?.[index]?.start_date
              ? new Date(formik.values?.experience?.[index]?.start_date)
              : undefined
          }
        />
        <ErrorMessage
          name={`experience[${index}].start_date`}
          component={"div"}
          className="text-red-500"
        />
      </div>
      <div className="flex flex-col">
        <label>End Date</label>
        <DatePicker
          name={`experience[${index}].end_date`}
          placeholder="Select Ended Date"
          onChange={(date) =>
            formik.setFieldValue(`experience[${index}].end_date`, date)
          }
          value={
            formik.values?.experience?.[index]?.end_date
              ? new Date(formik.values?.experience?.[index]?.end_date)
              : undefined
          }
        />
        <ErrorMessage
          name={`experience[${index}].end_date`}
          component={"div"}
          className="text-red-500"
        />
      </div>
      <div>
        <Checkbox
          name={`experience[${index}].currently_working`}
          id={`experience[${index}].currently_working`}
          value={experience?.[index]?.currently_working}
          onCheckedChange={(value) => {
            formik.setFieldValue(
              `experience[${index}].currently_working`,
              value
            )
          }}
        />
        <Label htmlFor={`experience[${index}].currently_working`}>
          Currently Working
        </Label>
      </div>
      <div>
        <label>Description</label>
        <textarea
          name={`experience[${index}].description`}
          className="w-full p-2 border rounded-lg"
        />
        <ErrorMessage
          name={`experience[${index}].currently_working`}
          component={"div"}
          className="text-red-500"
        />
      </div>
      {index >= 1 && (
        <button
          type="button"
          onClick={() => handleDeleteForm(index)}
          className="mt-2 bg-red-500 text-white py-1 px-2 rounded-lg"
        >
          Delete Experience
        </button>
      )}
    </div>
  )
}

export default AddExperienceForm
