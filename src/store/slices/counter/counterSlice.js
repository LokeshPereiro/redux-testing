import { createSlice } from "@reduxjs/toolkit";

// El Slice, como podemos ver, es tan solo una función que recibe un objeto
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 10,
  },
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementBy: (state, action) => {
      state.counterValue += action.payload;
    },
  },
});

// Action creators
export const { increment, decrement, incrementBy } = counterSlice.actions;
