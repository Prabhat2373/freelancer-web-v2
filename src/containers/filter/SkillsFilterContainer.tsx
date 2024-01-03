import React, { useState } from "react"

const SkillsFilterContainer = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const handleCheckboxChange = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills((prevSkills) => [...prevSkills, skill])
    }
  }

  return (
    <div className="mb-4">
      <h3 className="font-medium mb-2">Skills</h3>
    </div>
  )
}

export default SkillsFilterContainer
