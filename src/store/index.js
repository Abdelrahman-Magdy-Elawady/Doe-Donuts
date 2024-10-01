import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartReducer } from "./Slices/CartSlice";
//-----------------------------------------------------

//-----------------------------------------------------
import { donutsApi } from "./APIS/donutsApi";

//------------------------------------------------------
export const store = configureStore({
  reducer: {
    [donutsApi.reducerPath]: donutsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(donutsApi.middleware);
  },
});
setupListeners(store.dispatch);

//----------------------------------------------------------

export { useFetchDonutsQuery } from "./APIS/donutsApi";

//----------------------------------------------------------------------
export {
  addToCart,
  removeFromCart,
  cleanCart,
  modifyCart,
} from "./Slices/CartSlice";
