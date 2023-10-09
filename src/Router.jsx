import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OperaScreens from "./ticketInter/opera/OperaScreens";
import App from "./App";
import Main from "./Main";
import ConcertScreens from "./ticketInter/concert/ConcertScreens";
import SeatMap from "./ticketInter/concert/SeatMap";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Main />} />
          <Route path='opera/:seatPlace' element={<OperaScreens />} />
          <Route
            path='concert/:region/:venue/:place'
            element={<ConcertScreens />}
          />
          <Route
            path='concert/:region/:venue/:place/:seatNumber'
            element={<SeatMap />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
