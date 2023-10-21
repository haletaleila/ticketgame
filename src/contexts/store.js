import { configureStore } from "@reduxjs/toolkit";
import seatsReducer from "../features/SeatsSlice";

export const store = configureStore({
  reducer: {
    seats: seatsReducer,
  },
});
