import { createSlice } from "@reduxjs/toolkit";

export const seatsSlice = createSlice({
  name: "seats",
  initialState: {
    selectedSeats: [],
  },
  reducers: {
    selectSeat: (state, action) => {
      state.selectedSeats.push(action.payload);
    },
    deselectSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.info !== action.payload.info
      );
    },
  },
});

export const { selectSeat, deselectSeat } = seatsSlice.actions;

export const selectSelectedSeats = (state) => state.seats.selectedSeats;

export default seatsSlice.reducer;
