/* eslint-disable jsx-a11y/alt-text */
import { Outlet } from "react-router-dom";
// import "./App.css";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
`;
function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Outlet />
    </>
  );
}

export default App;
