import styled from "styled-components";

const StyledImage = styled.img`
  /* 여기에 원하는 스타일을 추가하세요. 예를 들면: */
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function ImageDisplayer({ region, venue, place, usemap }) {
  const imageUrl = `/assets/concert/${region}/${venue}/${place}.gif`;

  return (
    <StyledImage
      src={imageUrl}
      alt={`${region} ${venue} ${place}`}
      usemap={usemap}
    />
  );
}

export default ImageDisplayer;
