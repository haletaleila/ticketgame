import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ConcertAreaArea = styled.area`
  cursor: pointer;
`;

function ConcertArea({ coords, shape, seatNumber }) {
  const navigate = useNavigate();

  const handleAreaClick = () => {
    navigate(`./${seatNumber}`);
  };

  console.log(shape);

  return (
    <ConcertAreaArea shape={shape} coords={coords} onClick={handleAreaClick} />
  );
}

export default ConcertArea;
