import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuMobileSlice from "./slices/menuMobileSlice";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
  menuMobile: menuMobileSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
