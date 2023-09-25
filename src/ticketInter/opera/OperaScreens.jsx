import React, { useState, useEffect } from "react";
import { BackImage, Container, GetAJS, RightLeftDiv } from "./OperaStyle";
import SeatSelection from "./SeatSelection";
import { useParams } from "react-router-dom";

async function fetchSeatData(venue) {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/assets/temp/SetTempOpera.json`
  );
  const data = await response.json();
  const venueData = data.find((item) => item.id === venue);
  return venueData ? venueData.data : [];
}

function getFillColor(seatId, selectedSeats, seatData) {
  const isSelected = selectedSeats.some(
    (selectedSeat) =>
      selectedSeat.id.split("-")[0] === seatId.split("-")[0] &&
      selectedSeat.id.split("-")[1] === seatId.split("-")[1]
  );

  if (isSelected) {
    return "#000"; // 선택된 좌석은 검은색으로 표시
  }

  const [realSeatId, colIndex] = seatId.split("-");
  const seat = seatData.find((seat) => seat.id === realSeatId);

  if (!seat) return "#000"; // seatData에서 seat을 찾을 수 없는 경우, 기본 색상을 반환합니다.

  const seatType = seat.seat;

  switch (seatType) {
    case "R":
      return "rgb(28, 168, 20)";
    case "VIP":
      return "rgb(124, 104, 238)";
    case "S":
      return "rgb(23, 179, 255)";
    case "A":
      return "rgb(251, 126, 78)";
    default:
      return "#000"; // 기본 색상을 설정합니다.
  }
}

function OperaScreens() {
  const [seatData, setSeatData] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { seatPlace } = useParams();

  useEffect(() => {
    async function loadData() {
      const data = await fetchSeatData(seatPlace);
      setSeatData(data);
    }

    loadData();
  }, [seatPlace]);

  const handleSeatClick = (seatId) => {
    const isAlreadySelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.id === seatId
    );

    if (isAlreadySelected) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter((selectedSeat) => selectedSeat.id !== seatId)
      );
    } else {
      // seatId에서 실제 seat.id와 열 인덱스 값을 추출
      const [realSeatId, colIndex] = seatId.split("-"); // 수정된 부분
      const seat = seatData.find((seat) => seat.id === realSeatId);
      // 이 부분은 seat이 null이거나 undefined일 경우를 처리해야 합니다.
      if (seat) {
        // 새로운 col 값 계산
        const newColValue = seat.col + parseInt(colIndex, 10) - 1; // 수정된 부분
        setSelectedSeats((prevSelectedSeats) => [
          ...prevSelectedSeats,
          { ...seat, id: seatId, col: newColValue }, // 수정된 부분
        ]);
      }
    }
  };

  return (
    <>
      <RightLeftDiv>
        <Container>
          <BackImage place={seatPlace}>
            {seatData.map((seat, index) =>
              Array.from({ length: seat.position.amount }, (_, i) => {
                const seatId = `${seat.id}-${i + 1}`;
                const seatName = `${seat.seat}석 ${seat.floor}층 ${
                  seat.sector
                }구역${seat.col + i}열`;
                return (
                  <GetAJS
                    key={seatId}
                    onClick={() => handleSeatClick(seatId)}
                    role="button"
                    tabindex="0"
                    title={seatName}
                    top={seat.position.top}
                    left={seat.position.left + i * 10.5}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
                      <g>
                        <rect
                          width="8"
                          height="8"
                          x="0"
                          y="0"
                          fill={getFillColor(seatId, selectedSeats, seatData)} // seatData를 추가로 전달합니다.
                        >
                          <title>{seatName}</title>
                        </rect>
                      </g>
                    </svg>
                  </GetAJS>
                );
              })
            )}
          </BackImage>
        </Container>
        <Container>
          <SeatSelection selectedSeats={selectedSeats} />
        </Container>
      </RightLeftDiv>
    </>
  );
}

export default OperaScreens;
