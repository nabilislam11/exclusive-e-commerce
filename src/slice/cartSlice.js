import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: 0,
  },
  reducers: {
    cartDetails: (state) => {
      console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartDetails } = cartSlice.actions;

export default cartSlice.reducer;
