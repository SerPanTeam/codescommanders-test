import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUserByUsername: builder.query<User[], string>({
      query: (username) => `users?username=${username}`,
    }),
  }),
});

export const { useLazyGetUserByUsernameQuery } = authApi;
