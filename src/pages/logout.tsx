import { LogoutUser } from "@/features/slices/userReducer"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

const Logout = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(LogoutUser())
  }, [])
  return <div>You Have Logged Out Successfully!</div>
}

export default Logout
