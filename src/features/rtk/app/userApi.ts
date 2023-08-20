// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api/v1/",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "authorization",
        `bearer ${String(localStorage.getItem("token"))}`
      )
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAccount: builder.query({
      query: () => "/account",
    }),
    updateAccount: builder.mutation({
      query: (body) => ({
        url: "/account",
        method: "PUT",
        body,
      }),
    }),
    deleteExperience: builder.query({
      query: (id: string) => ({
        url: `/employment-history/${id}`,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetAccountQuery,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useLazyDeleteExperienceQuery,
} = userApi
