import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const donutsApi = createApi({
  reducerPath: "donuts",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_PORT,
  }),
  endpoints: (builder) => ({
    fetchDonuts: builder.query({
      query: () => ({
        url: "/donuts",
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchDonutsQuery } = donutsApi;
export { donutsApi };
