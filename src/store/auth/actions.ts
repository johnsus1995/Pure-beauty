import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "src/api/auth";

interface ResponseData {
    data:object
}

export const login = createAsyncThunk("auth/login", async (config:object) => {
      const res = await authApi.login(config);
      return res.data;
  
  });