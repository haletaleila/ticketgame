import React from "react";

const SelectedSeatsContext = React.createContext({
  selectedSeats: [],
  setSelectedSeats: () => {},
});

export default SelectedSeatsContext;
