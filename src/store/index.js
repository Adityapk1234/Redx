import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authSliceReducer from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    authtentication: authSliceReducer,
  },
});

export default store;
