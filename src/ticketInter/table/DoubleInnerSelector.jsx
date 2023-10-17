import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TmgsTable = styled.table`
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

const TableTbodyTrTd = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 2px;
  color: #636363;
`;

const TableTbodyTrTd2 = styled.td`
  font-family: "굴림", "돋움", "Verdana", "Arial";
  font-size: 12px;
  color: #636363;
`;

const DivSeatBox = styled.div`
  border: 3px solid #ccc;
  height: 100%;
  font-family: "malgun gothic";
  font-weight: bold;
  font-size: 20px;
`;

const SeatT = styled.span`
  background-color: white;
  width: 60px;
  height: 10px;
  font-size: 7pt;
  clear: left;
  float: left;
  padding: 0 10 0 0;
`;

const SeatB = styled.span`
  background-color: white;
  width: 10px;
  height: 1px;
  margin: 1px;
  padding: 0 0 0 0;
  display: inline-block;
`;

const SeatR = styled.span`
  background-color: whitesmoke;
  width: 10px;
  height: 10px;
  margin: 1px;
  padding: 0 0 0 0;
  display: inline-block;
`;

const DivBr = styled.div`
  height: 0.8rem;
  content: "";
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const FlexBoxLeft = styled.div`
  flex: 1;
`;

const FlexBoxCenter = styled.div`
  flex: 1;
`;

const FlexBoxRight = styled.div`
  flex: 8;
`;

const DoubleInnerSelector = () => {
  return (
    <>
      <TmgsTable width="100%" height="100%" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td valign="top" style={{ padding: "20px" }} nowrap="true">
              <DivSeatBox>
                <table width="600" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <TableTbodyTrTd width="4" height="4">
                        <img
                          src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_01.gif"
                          width="4"
                          height="4"
                        />
                      </TableTbodyTrTd>
                      <TableTbodyTrTd
                        height="4"
                        background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_top.gif"
                      ></TableTbodyTrTd>
                      <TableTbodyTrTd width="4" height="4">
                        <img
                          src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_01.gif"
                          width="4"
                          height="4"
                        />
                      </TableTbodyTrTd>
                    </tr>
                    <tr>
                      <TableTbodyTrTd2
                        width="4"
                        background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_bg.gif"
                      ></TableTbodyTrTd2>
                      <TableTbodyTrTd2 bgcolor="#EBEBEB">
                        <img
                          src="//ticketimage.interpark.com/TicketImage/event/061227/dot_03.gif"
                          width="5"
                          height="5"
                          align="absmiddle"
                        />{" "}
                        <b>
                          <font color="#3300FF">248 영역</font>의
                          좌석배치도입니다
                        </b>
                      </TableTbodyTrTd2>
                      <TableTbodyTrTd2
                        width="4"
                        background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_bg.gif"
                      ></TableTbodyTrTd2>
                    </tr>
                    <tr>
                      <TableTbodyTrTd width="4" height="4">
                        <img
                          src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_02.gif"
                          width="4"
                          height="4"
                        />
                      </TableTbodyTrTd>
                      <TableTbodyTrTd
                        height="4"
                        background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_bottom.gif"
                      ></TableTbodyTrTd>
                      <TableTbodyTrTd width="4" height="4">
                        <img
                          src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_02.gif"
                          width="4"
                          height="4"
                        />
                      </TableTbodyTrTd>
                    </tr>
                  </tbody>
                </table>
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
                <DivBr>
                  <FlexBox>
                    <FlexBoxLeft>
                      <SeatT
                        align="left"
                        style={{ width: "100px", paddingLeft: "5px" }}
                      >
                        <font
                          style={{ fontSize: "8pt", color: "#636363" }}
                          face="굴림"
                          align="left"
                        >
                          48구역 1열
                        </font>
                      </SeatT>
                    </FlexBoxLeft>
                    <FlexBoxCenter>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatB></SeatB>
                      <SeatR></SeatR>
                      <SeatR></SeatR>
                      <SeatR></SeatR>
                      <SeatR></SeatR>
                      <SeatR></SeatR>
                    </FlexBoxCenter>
                    <FlexBoxRight></FlexBoxRight>
                  </FlexBox>
                </DivBr>
                <DivBr>
                  <SeatT
                    align="left"
                    style={{ width: "100px", paddingLeft: "5px" }}
                  >
                    <font
                      style={{ fontSize: "8pt", color: "#636363" }}
                      face="굴림"
                      align="left"
                    >
                      48구역 2열
                    </font>
                  </SeatT>
                  <span
                    style={{ width: "5", fontSize: "7pt" }}
                    align="center"
                  ></span>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatB></SeatB>
                  <SeatR></SeatR>
                  <SeatR></SeatR>
                  <SeatR></SeatR>
                  <SeatR></SeatR>
                  <SeatR></SeatR>
                  <DivBr></DivBr>
                </DivBr>
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 3열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <DivBr></DivBr>
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 4열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <br />
                <br />
                <br />
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 5열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <DivBr>
                  <br />
                </DivBr>
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 6열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <DivBr>
                  <br />
                </DivBr>
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 7열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <DivBr>
                  <br />
                </DivBr>
                <SeatT
                  align="left"
                  style={{ width: "100px", paddingLeft: "5px" }}
                >
                  <font
                    style={{ fontSize: "8pt", color: "#636363" }}
                    face="굴림"
                    align="left"
                  >
                    48구역 8열
                  </font>
                </SeatT>
                <span
                  style={{ width: "5", fontSize: "7pt" }}
                  align="center"
                ></span>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatB></SeatB>
                <SeatB></SeatB>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
                <SeatR></SeatR>
              </DivSeatBox>
            </td>
          </tr>
        </tbody>
      </TmgsTable>
    </>
  );
};

export default DoubleInnerSelector;
