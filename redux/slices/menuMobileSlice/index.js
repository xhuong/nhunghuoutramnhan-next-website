import { createSlice } from "@reduxjs/toolkit";

const menuMobileSlice = createSlice({
  name: "menuMobile",
  initialState: {
    isActive: false,
  },
  reducers: {
    openMenu: (state) => {
      state.isActive = true;
    },
    closeMenu: (state) => {
      state.isActive = false;
    },
  },
});

export const { closeMenu, openMenu } = menuMobileSlice.actions;
export default menuMobileSlice.reducer;
