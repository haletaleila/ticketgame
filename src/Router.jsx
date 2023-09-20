import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import OperaScreens from "./ticketInter/opera/OperaScreens";
import App from "./App";
import Main from "./Main";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="opera" element={<OperaScreens />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
