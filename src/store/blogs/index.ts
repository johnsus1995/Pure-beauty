import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as actions from "./actions";

interface blog {
  id:string,
  title:object,
  _links:object,
}

export interface Blogs {
    blogs:blog[],
    error:object,
    loading:boolean,
}

export interface BlogAction {
  jwt_token:string
}

const initialState : Blogs= {
    blogs: [],
    error: {},
    loading: false,
}

const blogsSlice = createSlice({ 
    name: "blogs",
    initialState,
    extraReducers: {
      [actions.getBlogs.pending.type]: (state) => {
        state.loading = true;
      },
      [actions.getBlogs.fulfilled.type]: (state, action:PayloadAction<AuthAction>) => {
        state.loading = false;
        // state.user = action.payload;
      },
      [actions.getBlogs.rejected.type]: (state, action:PayloadAction<AuthAction>) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  
  export default blogsSlice.reducer;