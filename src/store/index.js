import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//-----------------------------------------------------
import { navBarColorReducer } from "./Slices/navBarColorSlice";
//-----------------------------------------------------
import { categoriesApi } from "./APIS/categoriesApi";
import { specificCategoryApi } from "./APIS/specificCategoryApi";
//------------------------------------------------------
export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [specificCategoryApi.reducerPath]: specificCategoryApi.reducer,
    navBarColor: navBarColorReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(categoriesApi.middleware)
      .concat(specificCategoryApi.middleware);
  },
});
setupListeners(store.dispatch);

//----------------------------------------------------------

export { useFetchCategoriesQuery } from "./APIS/categoriesApi";
export { useFetchSpecificCategoryQuery } from "./APIS/specificCategoryApi";

//----------------------------------------------------------------------

export { modifyColor } from "./Slices/navBarColorSlice";
