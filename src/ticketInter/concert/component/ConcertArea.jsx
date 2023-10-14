import React from "react";
import styled from "styled-components";

const ConcertAreaArea = styled.area`
  cursor: pointer;
`;

function ConcertArea({ coords, code }) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <ConcertAreaArea shape="rect" coords={coords}></ConcertAreaArea>
  );
}

export default ConcertArea;
