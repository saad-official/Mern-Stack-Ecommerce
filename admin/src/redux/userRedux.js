import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    isError: false,
    users: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isError = false;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },

    getUserStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isError = false;
      console.log("logout");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
