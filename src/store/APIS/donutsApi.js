import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const donutsApi = createApi({
  reducerPath: "donuts",
  baseQuery: fetchBaseQuery({
    baseUrl: " http://localhost:3001",
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
