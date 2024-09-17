import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const specificCategoryApi = createApi({
  reducerPath: "specificCategory",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    fetchSpecificCategory: builder.query({
      query: (specificCategory) => ({
        url: `/filter.php?c=${specificCategory}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchSpecificCategoryQuery } = specificCategoryApi;
export { specificCategoryApi };
