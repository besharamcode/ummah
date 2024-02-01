import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, payload) => {},
  },
});

export const { signup, check, data } = authSlice.actions;

export default authSlice.reducer;
