import InputField from "@/components/inputs/InputField";
import React from "react";
import Select from "react-select";

const AddExperienceForm = ({ experience }) => {
  return (
    <div>
      <InputField name="title" placeholder="Designation" label="Title" />
      <div className="grid grid-cols-2">
        <InputField
          name="company"
          placeholder="Enter Company Name"
          label="Company"
        />
        <div>
          <label>Employment Type </label>
          <Select
            name="emplyment_type"
            placeholder="Part Time"
            options={[
              { label: "Full Time", value: "full_time" },
              { label: "Part Time", value: "part_time" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExperienceForm;
