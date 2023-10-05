import React from "react";

export default function GetFillColor(seatId, selectedSeats, seatData) {
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
