import React from "react";

function ConcertArea({ coords, code }) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <area shape="rect" coords={coords} />
  );
}

export default ConcertArea;
