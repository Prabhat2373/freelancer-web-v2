import { Button } from "@/components/ui/button"
import React, { useState } from "react"

const Test = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }
  console.log("isLoading", isLoading)
  console.log("isSuccess", isSuccess)

  return (
    <div>
      <Button isLoading={isLoading} isSuccess={isSuccess} onClick={handleClick}>
        Test Button
      </Button>
    </div>
  )
}

export default Test
