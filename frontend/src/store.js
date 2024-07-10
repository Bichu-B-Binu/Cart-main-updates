import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slice/apiSlice";
import cartSliceReducer from "./slice/cartSlice";
import authSlice from "./slice/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
