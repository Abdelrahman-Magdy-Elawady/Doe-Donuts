import { createSlice } from "@reduxjs/toolkit";

const navBarColorSlice = createSlice({
  name: "navBarColor",
  initialState: "bg-[#f687ad] text-white",
  reducers: {
    modifyColor(state, action) {
      return action.payload;
    },
  },
});

export const navBarColorReducer = navBarColorSlice.reducer;
export const { modifyColor } = navBarColorSlice.actions;
