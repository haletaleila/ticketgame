import { styled } from "styled-components";

export const RightLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  position: relative;
`;

export const GetAJS = styled.a`
  position: absolute;
  top: ${(props) => `${props.top}px` || "0px"};
  left: ${(props) => `${props.left}px` || "0px"};
  width: 8px;
  height: 8px;
  transform: rotate(90deg);
  cursor: pointer;
`;

const bgImage = `${process.env.PUBLIC_URL}/assets/images/21000636RGN001.gif`;

export const BackImage = styled.div`
  background-image: url(${bgImage});
  width: 658px;
  height: 619px;
`;
