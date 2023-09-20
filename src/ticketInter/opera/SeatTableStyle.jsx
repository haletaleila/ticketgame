import styled, { css } from "styled-components";

const commonStyles = css`
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  font-size: 12px;
  color: #636363;
  border-spacing: 0;
  border-collapse: collapse;
`;

export const WatchInfo = styled.div`
  ${commonStyles}
  width: 215px;
  height: 106px;
  border: 1px solid #d1d1d1;
  background: #fff;
`;

export const ScrollY = styled.div`
  ${commonStyles}
  width: 100%;
  height: 106px;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
`;

export const SeatGradeInfo = styled.div`
  ${commonStyles}
`;

export const WarpList = styled.div`
  ${commonStyles}
  position: relative;
`;

export const WrapTable = styled.table`
  ${commonStyles}
  width: 100%;
  margin-top: 3px;
`;

export const WrapColgroup = styled.colgroup`
  ${commonStyles}
`;

export const WrapTbody = styled.tbody`
  ${commonStyles}
`;

export const GradeDetail = styled.td`
  ${commonStyles}
  font-size: 11px;
  color: #c66;
  height: 16px;
  padding-top: 3px;
  vertical-align: top;
`;

export const LvDiv = styled.div`
  ${commonStyles}
  position: relative;
  color: #c66;
`;

export const LvStrong = styled.strong`
  ${commonStyles}
  color: #666;
  padding-left: 23px;
  display: inline-block;
`;

export const LvSpan = styled.span`
  ${commonStyles}
  position: absolute;
  top: 2px;
  left: 11px;
  width: 8px;
  height: 8px;
  font-size: 2px;
  margin-right: 20px;
  background: #7c68ee;
`;

export const LvStrongSpan = styled.span`
  ${commonStyles}
  font-weight: normal;
  color: #c66;
  display: inline-block;
  margin-left: 2px;
`;
