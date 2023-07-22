import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

export interface User {
    user:object,
    error:object,
    loading:boolean,
}

const initialState : NonNullable<User> = {
    user: {},
    error: {},
    loading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
        localStorage.clear();
      },
    },
    extraReducers: {
      [actions.login.pending]: (state:object) => {
        state.loading = true;
      },
      [actions.login.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem(
          "user_token",action?.payload?.token
        );
      },
      [actions.login.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [actions.register.pending]: (state, action) => {
        state.loading = true;
      },
      [actions.register.fulfilled]: (state, action) => {
        state.loading = false;
        state.user = action.payload;
      },
      [actions.register.rejected]: (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message;
      },
    },
  });
  
  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;