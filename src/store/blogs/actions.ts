import { createAsyncThunk } from "@reduxjs/toolkit";
import * as blogsApi from "src/api/blogs";

interface blog {
  id:string,
  title:object,
  _links:object,
}

interface ResponseData {
  data: blog[];
}


export const getBlogs = createAsyncThunk<ResponseData>(
  "blogs/getBlogs",
  async () => {
    const res = await blogsApi.getBlogs();
    return res.data as ResponseData;
  }
);
