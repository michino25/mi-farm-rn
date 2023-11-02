import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

const initialState = [];

export default createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    const res = await api.get("/categories");
    return res.data;
  }
);
