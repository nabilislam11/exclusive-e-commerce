import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: localStorage.getItem("cartDetails")
      ? JSON.parse(localStorage.getItem("cartDetails"))
      : [],
  },
  reducers: {
    carttotal: (state, action) => {
      // console.log(state.value);
      // console.log(action.payload);
      // state.value = action.payload;
      const cartIndex = state.value.findIndex(
        (item) => item._id == action.payload._id
      );
      if (cartIndex >= 0) {
        state.value[cartIndex].cartQun += 1;
      } else {
        state.value.push({ ...action.payload, cartQun: 1 });
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.value));
    },
    cartQuantity: (state, action) => {
      console.log(state);
      console.log(action.payload);
      const cartIndex = state.value.findIndex(
        (item) => item._id == action.payload._id
      );
      if (action.payload.type == "increment") {
        state.value[cartIndex].cartQun++;
      } else {
        state.value[cartIndex].cartQun--;
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { carttotal, cartQuantity } = cartSlice.actions;

export default cartSlice.reducer;
