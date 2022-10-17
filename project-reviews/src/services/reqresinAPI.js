import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reqresinAPI = createApi({
  reducerPath: "reqresinAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  endpoints: (builder) => ({
    // GET /users
    users: builder.query({
      query: () => `/users`,
    }),

    // POST /users
    user: builder.mutation({
      query: ({ ...objUser }) => ({
        method: "POST",
        url: `/users`,
        // data yang dikirimkan ke request body
        body: objUser,
      }),
    }),
  }),
});

export const { useUsersQuery, useUserMutation } = reqresinAPI;
