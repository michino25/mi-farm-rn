import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(initData.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(initData.fulfilled, (state, action) => {
  //       state.status = "idle";
  //       state.value = action.payload;
  //     })
  //     .addCase(incrementCount.fulfilled, (state) => {
  //       state.value = action.payload;
  //     });
  // },
});

// export const incrementCount = createAsyncThunk(
//   "counter/incrementCount",
//   async () => {
//     await setData(10);
//     return 10;
//   }
// );

// export const initData = createAsyncThunk("counter/initData", async () => {
//   const response = await getData();
//   return response;
// });

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
