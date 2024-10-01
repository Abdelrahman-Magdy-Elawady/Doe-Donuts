import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart(state, action) {
      const index = state.findIndex((donut) => donut.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1, action.payload);
      }
    },
    removeFromCart(state, action) {
      return state.filter((donut) => donut.id !== action.payload.id);
    },
    modifyCart(state, action) {
      //assume i pass object contain{donut && actionType='plus'||'minus'}
      const index = state.findIndex(
        (donut) => donut.id === action.payload.donut.id
      );
      if (action.payload.type === "plus") {
        state[index].count++;
      } else if (action.payload.type === "minus") {
        if (state[index].count > 1) {
          state[index].count--;
        } else {
          return state.filter((donut) => donut.id !== action.payload.donut.id);
        }
      }
    },
    cleanCart() {
      return [];
    },
  },
});

export const cartReducer = CartSlice.reducer;
export const { addToCart, removeFromCart, cleanCart, modifyCart } =
  CartSlice.actions;
