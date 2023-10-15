import React, { useState } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

import FetchJson from "../../common/component/json/FetchJson";
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
      <Route path="details/:id" element={<DoubleInnerSelector />} />
    </Routes>
  );
};

export default TableCaller;
