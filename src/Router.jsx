import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OperaScreens from "./ticketInter/opera/OperaScreens";
import App from "./App";
import Main from "./Main";
import ConcertScreens from "./ticketInter/concert/ConcertScreens";
import SeatMap from "./ticketInter/concert/SeatMap";
import RequestBoard from "./board/RequestBoard";
import DoubleSelector from "./ticketInter/DoubleSelector";
import Selector from "./ticketInter/Selector";
import TableCaller from "./ticketInter/table/TableCaller";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="opera/:seatPlace" element={<OperaScreens />} />
          <Route
            path="concert/:region/:venue/:place"
            element={<ConcertScreens />}
          />
          <Route
            path="concert/:region/:venue/:place/:seatNumber"
            element={<SeatMap />}
          />
          <Route path="board/request" element={<RequestBoard />} />
          <Route path="/select" element={<Selector onOff={false} />}>
            <Route index element={<TableCaller />} />
            <Route path="map" element={<TableCaller />} />
            <Route path="details/:id" element={<TableCaller />} />
          </Route>
          <Route path="/single" element={<Selector onOff={true} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
