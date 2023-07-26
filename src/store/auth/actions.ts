import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "src/api/auth";

interface ResponseData {
    data:object
}

export interface LoginConfig {
    email:string,
    password:string
}

export const login = createAsyncThunk<ResponseData, LoginConfig>(
  "auth/login",
  async (config:LoginConfig) => {
    const res = await authApi.login(config);
    return res;
  }
);