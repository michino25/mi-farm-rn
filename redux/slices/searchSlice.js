import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils";

const initialState = [];

export default createSlice({
  name: "search",
  initialState,
  reducers: {
    searchReset: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchProducts.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (query) => {
    const res = await api.get("/products" + query);
    return res.data;
  }
);
