// useAuth.js
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { RootState } from "@/features/store/store"
// import { useRoles } from "./rolesContext"

const useAuth = () => {
  const router = useRouter()
  const { user } = useSelector((state: RootState) => state.user)
  const role = user?.role

  const checkAuthorization = (requiredRole, prefix) => {
    if (!role) {
      router.replace("/login")
      return false
    }

    if (prefix && !router.pathname.startsWith(prefix)) {
      router.replace("/405")
      return false
    }

    if (prefix && role === requiredRole) {
      return true
    }

    router.replace("/405")
    return false
  }

  return { checkAuthorization }
}

export default useAuth
