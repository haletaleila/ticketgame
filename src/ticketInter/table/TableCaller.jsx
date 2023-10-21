import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import DoubleInnerSelector from "./DoubleInnerSelector";
import DoubleOuterSelector from "./DoubleOuterSelector";

const TableCaller = () => {
  const navigate = useNavigate();

  const handleAreaClick = (id) => {
    navigate(`/select/details/${id}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<DoubleOuterSelector onAreaClick={handleAreaClick} />}
      />
      <Route path="details/:sector" element={<DoubleInnerSelector />} />
    </Routes>
  );
};

export default TableCaller;
