import React from "react";
import styled from "styled-components";
import DoubleSelector from "./DoubleSelector";
import SelectLeftComponents from "./SelectLeftComponents";

const Selector = () => {
  return (
    <FormSelector>
      <FormSelectorLeft>
        <DoubleSelector />
      </FormSelectorLeft>
      <FormSelectorRight>
        <SelectLeftComponents />
      </FormSelectorRight>
    </FormSelector>
  );
};

const FormSelector = styled.div`
  display: flex;
  flex-direction: row;
`;

const FormSelectorLeft = styled.div`
  flex: 7.5;
`;

const FormSelectorRight = styled.div`
  flex: 2.5;
`;

export default Selector;
