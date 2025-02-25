import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import the counter slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
