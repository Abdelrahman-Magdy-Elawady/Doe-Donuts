import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    fetchCategories: builder.query({
      query: () => ({
        url: "/categories.php",
        method: "GET",

        // headers: {
        //   "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        //   "x-rapidapi-host": import.meta.env.VITE_BURGER_HOST,
        // },
      }),
    }),
  }),
});

export const { useFetchCategoriesQuery } = categoriesApi;
export { categoriesApi };
