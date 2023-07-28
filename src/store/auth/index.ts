import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./actions";

export interface User {
    user:object,
    error:object,
    loading:boolean,
}

export interface AuthAction {
  jwt_token:string
}

const initialState : User= {
    user: {},
    error: {},
    loading: false,
}

const authSlice = createSlice({ 
    name: "auth",
    initialState,
    reducers: {
      logout: (state) => {
        state.user = {};
        localStorage.clear();
      },
    },
    extraReducers: {
      [actions.login.pending.type]: (state) => {
        state.loading = true;
      },
      [actions.login.fulfilled.type]: (state, action:PayloadAction<AuthAction>) => {
        state.loading = false;
        // state.user = action.payload;
        localStorage.setItem(
          "user_token",action?.payload?.jwt_token
        );
      },
      [actions.login.rejected.type]: (state, action:PayloadAction<AuthAction>) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { logout } = authSlice.actions;
  
  export default authSlice.reducer;