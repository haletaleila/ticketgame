import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BodyDiv = styled.div`
  margin: 0;
`;

const DivTable = styled.table`
  width: 100%;
  height: 100%;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  white-space-collapse: collapse;
  text-wrap: wrap;
  line-height: normal;
  font-weight: normal;
  font-size: medium;
  font-style: normal;
  color: -internal-quirk-inherit;
  text-align: start;
  border-color: gray;
  font-variant: normal;
`;

const DivTableTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const DivTableTbodyTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const DivTableTbodyTd = styled.td`
  padding: 20px;
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  vertical-align: top;
  white-space-collapse: collapse;
  text-wrap: nowrap;
  display: table-cell;
`;

const DivSeatBox = styled.div`
  border: 3px solid #ccc;
  height: 100%;
  font-family: "malgun gothic";
  font-weight: bold;
  font-size: 20px;
  display: block;
  color: #636363;
`;

const DivSeatBoxTable = styled.table`
  width: 600px;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  -webkit-border-horizontal-spacing: 0px;
  -webkit-border-vertical-spacing: 0px;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  white-space-collapse: collapse;
  text-wrap: wrap;
  line-height: normal;
  font-weight: normal;
  font-size: medium;
  font-style: normal;
  color: -internal-quirk-inherit;
  text-align: start;
  border-color: gray;
  font-variant: normal;
`;

const DivSeatBoxTableTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  white-space-collapse: collapse;
  text-wrap: wrap;
  line-height: normal;
  font-weight: normal;
  font-size: medium;
  font-style: normal;
  color: -internal-quirk-inherit;
  text-align: start;
  border-spacing: 2px;
  border-color: gray;
  font-variant: normal;
`;

const DivSeatBoxTableTbodyTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  white-space-collapse: collapse;
  text-wrap: wrap;
  line-height: normal;
  font-weight: normal;
  font-size: medium;
  font-style: normal;
  color: -internal-quirk-inherit;
  text-align: start;
  border-spacing: 2px;
  border-color: gray;
  font-variant: normal;
`;

const DivSeatBoxTableTbodyTd2 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  height: 4px;
  background-image: url("http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_top.gif");
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyTd3 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  width: 4px;
  background-image: url("http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_bg.gif");
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyTd = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  width: 4px;
  height: 4px;
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyTd4 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  background-color: rgb(235, 235, 235);
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyTd5 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  width: 4px;
  background-image: url("http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_bg.gif");
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyTd6 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
  height: 4px;
  background-image: url("http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_bottom.gif");
  display: table-cell;
  vertical-align: inherit;
`;

const DivSeatBoxTableTbodyImg = styled.img`
  width: 4px;
  aspect-ratio: auto 4 / 4;
  height: 4px;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const DivSeatBoxTableTbodyImg2 = styled.img`
  width: 5px;
  aspect-ratio: auto 5 / 5;
  height: 5px;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
`;

const DoubleInnerSelector = () => {
  return (
    <BodyDiv>
      <DivTable>
        <DivTableTbody>
          <DivTableTbodyTr>
            <DivTableTbodyTd>
              <DivSeatBox>
                <DivSeatBoxTable>
                  <DivSeatBoxTableTbody>
                    <DivSeatBoxTableTbodyTr>
                      <DivSeatBoxTableTbodyTd>
                        <DivSeatBoxTableTbodyImg src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_01.gif" />
                      </DivSeatBoxTableTbodyTd>
                      <DivSeatBoxTableTbodyTd2></DivSeatBoxTableTbodyTd2>
                      <DivSeatBoxTableTbodyTd>
                        <DivSeatBoxTableTbodyImg src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_01.gif" />
                      </DivSeatBoxTableTbodyTd>
                    </DivSeatBoxTableTbodyTr>
                    <DivSeatBoxTableTbodyTr>
                      <DivSeatBoxTableTbodyTd3></DivSeatBoxTableTbodyTd3>
                      <DivSeatBoxTableTbodyTd4>
                        <DivSeatBoxTableTbodyImg2
                          src="//ticketimage.interpark.com/TicketImage/event/061227/dot_03.gif"
                          align="absmiddle"
                        />{" "}
                        <b>
                          <font color="#3300FF">248 영역</font>의
                          좌석배치도입니다
                        </b>
                      </DivSeatBoxTableTbodyTd4>
                      <DivSeatBoxTableTbodyTd5></DivSeatBoxTableTbodyTd5>
                    </DivSeatBoxTableTbodyTr>
                    <DivSeatBoxTableTbodyTr>
                      <DivSeatBoxTableTbodyTd>
                        <DivSeatBoxTableTbodyImg src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_02.gif" />
                      </DivSeatBoxTableTbodyTd>
                      <DivSeatBoxTableTbodyTd6></DivSeatBoxTableTbodyTd6>
                      <DivSeatBoxTableTbodyTd>
                        <DivSeatBoxTableTbodyImg src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_02.gif" />
                      </DivSeatBoxTableTbodyTd>
                    </DivSeatBoxTableTbodyTr>
                  </DivSeatBoxTableTbody>
                </DivSeatBoxTable>

                <table width="600" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td height="10"></td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="http://ticketimage.interpark.com/TicketImage/onestop/html/default.gif"
                          onerror="javascript:this.src='http://ticketimage.interpark.com/TicketImage/onestop/html/default.gif'"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 1열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 2열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 3열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 4열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <br />
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 5열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 6열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 7열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <br />
                <span class="SeatT" align="left">
                  <font face="굴림" align="left">
                    48구역 8열
                  </font>
                </span>
                <span align="center"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatB"></span>
                <span class="SeatB"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
                <span class="SeatR"></span>
              </DivSeatBox>
            </DivTableTbodyTd>
          </DivTableTbodyTr>
        </DivTableTbody>
      </DivTable>
    </BodyDiv>
  );
};

export default DoubleInnerSelector;
