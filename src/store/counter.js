import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: false };
//better way of writing where we are updating on the state that is being changed.
// Redux clones the other states automatically.
const counterSlice = createSlice({
  name: "counterr",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
