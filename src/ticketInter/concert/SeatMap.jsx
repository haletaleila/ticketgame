import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import FetchJson from "../../common/component/json/FetchJson";
import GetFillColor from "../../common/component/GetFillColor";

const SeatMapContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeatRow = styled.div`
  display: flex;
`;

const SeatR = styled.span`
  background-color: whitesmoke;
  width: 10px;
  height: 10px;
  margin: 1px;
  padding: 0;
  display: inline-block;

  &:hover {
    background-color: lightgray;
  }

  &.selected {
    background-color: green;
  }
`;

const SeatMap = () => {
  const { seatNumber, region, venue, place } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]); // 선택된 좌석들을 배열로 관리

  const handleSeatClick = (col, seatIndex, typeId) => {
    const seatId = `${col}-${seatIndex}`;

    const seatAlreadySelected = selectedSeats.findIndex(
      (seat) => seat.id === seatId
    );
    if (seatAlreadySelected >= 0) {
      console.log(`${col}열 ${seatIndex + 1}석 선택 취소`);
      setSelectedSeats((prev) => prev.filter((seat) => seat.id !== seatId));
    } else {
      console.log(`${col}열 ${seatIndex + 1}석 선택`);
      setSelectedSeats((prev) => [...prev, { id: seatId, typeId: typeId }]);
    }
  };

  // json data 가져오기 - 로컬
  const jsonUrl = `/assets/concert/${region}/${venue}/${place}.json`;
  const { data, loading, error } = FetchJson({ url: jsonUrl });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredSeatDetail = data.seatDetails
    .filter((detail) => detail.seatNumber === seatNumber)
    .sort((a, b) => Number(a.col) - Number(b.col));

  return (
    <SeatMapContainer>
      {filteredSeatDetail.map((detail) => (
        <SeatRow key={detail.col}>
          {Array(Number(detail.range))
            .fill()
            .map((_, seatIndex) => {
              const seatId = `${detail.col}-${seatIndex}`;
              const isSelected = selectedSeats.some(
                (seat) => seat.id === seatId
              );
              return (
                <SeatR
                  key={seatIndex}
                  style={{
                    backgroundColor: GetFillColor(detail.typeId, isSelected),
                  }}
                  onClick={() =>
                    handleSeatClick(detail.col, seatIndex, detail.typeId)
                  }
                />
              );
            })}
        </SeatRow>
      ))}
    </SeatMapContainer>
  );
};

export default SeatMap;
