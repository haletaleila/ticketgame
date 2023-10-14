import React from "react";
import styled from "styled-components";
import ImageCaller from "./image/ImageCaller";
import TableCaller from "./table/TableCaller";

const DoubleSelector = () => {
  return (
    <>
      <TableCaller></TableCaller>
      <ImageCaller height="540" width="600"></ImageCaller>
    </>
  );
};

export default DoubleSelector;
