import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jikanAPI = createApi({
  reducerPath: "jikanAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jikan.moe/v4",
  }),
  endpoints: (builder) => ({
    topAnime: builder.query({
      query: () => `/top/anime`,
    }),
  }),
});

export const { useTopAnimeQuery } = jikanAPI;
