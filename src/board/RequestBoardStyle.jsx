import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('/assets/fonts/Pretendard-ExtraBold.otf') format('opentype');
    font-weight: 900;
    font-style: normal;
}



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
vertical-align: baseline;
font-family: 'Pretendard-Regular', sans-serif;
  line-height: 1;
  font-weight: 800;
  word-break: "keep-all";
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.3); 
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: 'Pretendard-Regular', sans-serif;
  line-height: 1;
  font-weight: 800;
  word-break: "keep-all";
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
*{
  box-sizing: border-box;
}

`;

export const MainContainer = styled.div`
  display: flex;
  margin: 1rem;
  flex-direction: column;
`;

export const BoardHeader = styled.div`
  margin: 0.1rem;
  flex: 1;
`;

export const BoardLine = styled.div`
  margin-top: 2.5rem;
  border-bottom: 1px solid #030303;
  /* border-image: linear-gradient(to right, transparent, #030303, transparent) 1; */
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const BoardHeaderText = styled.span`
  font-size: 2rem;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
`;

export const Column = styled.span`
  font-size: 1rem;
`;
