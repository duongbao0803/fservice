import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    // token: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
