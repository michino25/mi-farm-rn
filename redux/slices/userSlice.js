import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api, UserInfo } from "../../utils";

export const STORAGE_KEY = "MIFARM";

const defaultState = { status: "", user: {} };
const initialState = defaultState;

export default createSlice({
  name: "users",
  initialState,
  reducers: {
    userLogout: (state) => {
      return defaultState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      // console.log(action.payload);
      state = { status: "logged", user: action.payload };
      return state;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      /* eslint-disable */
      const err = action.payload;
      // console.log(err.response.data);
      state = { status: err.response.data, user: {} };
      return state;
    });

    builder.addCase(userRegister.fulfilled, (state) => {
      // console.log(action.payload);
      state = { status: "registered", user: {} };
      return state;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      /* eslint-disable */
      const err = action.payload;
      // console.log(err.response.data);
      state = { status: err.response.data, user: {} };
      return state;
    });
  },
});

export const userLogin = createAsyncThunk(
  "users/userLogin",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", { username, password });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const userRegister = createAsyncThunk(
  "users/userRegister",
  async ({ username, password, email }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/register", {
        username,
        password,
        email,
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
