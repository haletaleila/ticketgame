import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function ConcertScreens() {
  const { region, venue, place } = useParams(); // 파람정보를 가져와서 어디로 시트 정보를 보여줄지 결정해보자.

  // image 불러오기?

  return (
    <>
      <div>{region}</div>
      <div>{venue}</div>
      <div>{place}</div>
    </>
  );
}

export default ConcertScreens;
