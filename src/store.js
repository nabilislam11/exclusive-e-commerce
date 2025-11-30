import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
export default configureStore({
  reducer: {
    cartinfo: cartReducer,
  },
});
