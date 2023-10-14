import React from "react";
import styled from "styled-components";

const ImageCaller = ({ height, width }) => {
  const testImage = "/assets/concert/test/test.gif";
  const testImageAlt = "test";
  return (
    <>
      <img src={testImage} alt={testImageAlt} height={height} width={width} />
    </>
  );
};

export default ImageCaller;
