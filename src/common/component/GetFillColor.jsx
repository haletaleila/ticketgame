export default function GetFillColor(typeId, isSelected) {
  if (isSelected) {
    return "#000"; // 선택된 좌석은 검은색으로 표시
  }

  switch (typeId) {
    case "1": // VIP
      return "rgb(124, 104, 238)";
    case "2": // SR석
      return "rgb(28, 168, 20)";
    case "3": // R석
      return "rgb(23, 179, 255)";
    case "4": // S석
      return "rgb(251, 126, 78)";
    default:
      return "#000"; // 기본 색상을 설정합니다.
  }
}
