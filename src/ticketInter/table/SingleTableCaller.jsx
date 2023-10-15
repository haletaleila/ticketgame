import React from "react";
import styled from "styled-components";

const SingleTableCaller = () => {
  return (
    <SingleTable
      width="100%"
      height="100%"
      cellpadding="0"
      cellspacing="0"
      id="TmgsTable"
      name="TmgsTable"
    >
      <tbody>
        <tr>
          <td align="center" valign="middle">
            <StySeatBase
              id="MainMap"
              style={{ left: "0", top: "0" }}
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/R/21/21000636RGN001.gif"
              border="0"
            />

            <StySeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/G/2_90.gif"
              style={{ left: "93px", top: "252px" }}
              alt="[R석] 1층-A구역15열-1"
              title="[R석] 1층-A구역15열-1"
              onclick="javascript: SelectSeat('SID0', '2', '1층', 'A구역15열', '1', '001')"
            />
            <StySelectSeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/S/S_90.gif"
              id="SID0"
              style={{ left: "93px", top: "252px", display: "none" }}
              onclick="javascript: SelectSeat('SID0', '2', '1층', 'A구역15열', '1', '001')"
              seatinfo="1층-A구역15열-1"
              rowidx="0"
              colidx="0"
            />

            <StySeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/G/1_90.gif"
              style={{ left: "188px", top: "252px" }}
              alt="[VIP석] 1층-A구역15열-10"
              title="[VIP석] 1층-A구역15열-10"
              onclick="javascript: SelectSeat('SID1', '1', '1층', 'A구역15열', '10', '001')"
            />
            <StySelectSeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/S/S_90.gif"
              id="SID1"
              style={{ left: "188px", top: "252px", display: "none" }}
              onclick="javascript: SelectSeat('SID1', '1', '1층', 'A구역15열', '10', '001')"
              seatinfo="1층-A구역15열-10"
              rowidx="0"
              colidx="0"
            />

            <StySeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/G/1_90.gif"
              style={{ left: "198px", top: "252px" }}
              alt="[VIP석] 1층-A구역15열-11"
              title="[VIP석] 1층-A구역15열-11"
              onclick="javascript: SelectSeat('SID2', '1', '1층', 'A구역15열', '11', '001')"
            />
            <StySelectSeat
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/S/S_90.gif"
              id="SID2"
              style={{ left: "198px", top: "252px", display: "none" }}
              onclick="javascript: SelectSeat('SID2', '1', '1층', 'A구역15열', '11', '001')"
              seatinfo="1층-A구역15열-11"
              rowidx="0"
              colidx="0"
            />

            <input type="hidden" id="ImgSeatCount" value="350" />
          </td>
        </tr>
      </tbody>
    </SingleTable>
  );
};

const SingleTable = styled.table`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
`;

const StySelectSeat = styled.img`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  border: #ffffff 0px solid;
  background-repeat: no-repeat;
`;

const StySeat = styled.img`
  position: absolute;
  z-index: 2;
  cursor: pointer;
  border: #ffffff 0px solid;
  background-repeat: no-repeat;
`;

const StySeatBase = styled.img`
  position: absolute;
  display: none2;
`;

export default SingleTableCaller;
