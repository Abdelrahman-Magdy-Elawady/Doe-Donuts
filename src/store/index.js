import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//-----------------------------------------------------
import { navBarColorReducer } from "./Slices/navBarColorSlice";
//-----------------------------------------------------
import { donutsApi } from "./APIS/donutsApi";

//------------------------------------------------------
export const store = configureStore({
  reducer: {
    [donutsApi.reducerPath]: donutsApi.reducer,

    navBarColor: navBarColorReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(donutsApi.middleware);
  },
});
setupListeners(store.dispatch);

//----------------------------------------------------------

export { useFetchDonutsQuery } from "./APIS/donutsApi";

//----------------------------------------------------------------------
export { modifyColor } from "./Slices/navBarColorSlice";
