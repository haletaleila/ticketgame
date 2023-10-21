import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectSeat,
  deselectSeat,
  selectSelectedSeats,
} from "../../features/SeatsSlice";

import styled from "styled-components";
import FetchJson from "../../common/component/json/FetchJson";

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
  font-size: 8pt;
  clear: left;
  float: left;
  padding: 0 10px 0 0;
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
  height: 0.7rem;
  content: "";
`;

const DoubleInnerSelector = () => {
  const { sector } = useParams();
  const dispatch = useDispatch();
  const selectedSeats = useSelector(selectSelectedSeats);
  const [selectedSeatsStyles, setSelectedSeatsStyles] = useState({});

  const handleSeatClick = (seat, sectionName, rowNumber) => {
    const seatInfo = `${sector}-${sectionName}-${rowNumber}-${seat.position}`;
    const newSeat = {
      info: seatInfo,
      grade: seat.grade,
    };

    // Check if the seat is already selected
    const alreadySelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.info === seatInfo
    );

    if (alreadySelected) {
      dispatch(deselectSeat(newSeat)); // If already selected, we dispatch a deselect action.
    } else {
      dispatch(selectSeat(newSeat)); // If not selected, we dispatch a select action.
    }

    // 선택 또는 선택 해제 시, 해당 좌석의 스타일을 업데이트합니다.
    setSelectedSeatsStyles((prevStyles) => {
      const newStyles = { ...prevStyles };
      if (alreadySelected) {
        delete newStyles[seatInfo]; // 해당 좌석 스타일 제거
      } else {
        newStyles[seatInfo] = { backgroundColor: "black" }; // 해당 좌석 스타일 추가
      }
      return newStyles;
    });
  };

  useEffect(() => {
    const newStyles = {};
    selectedSeats.forEach((seat) => {
      newStyles[seat.info] = { backgroundColor: "black" };
    });

    setSelectedSeatsStyles(newStyles);
  }, [selectedSeats]);

  const jsonUrl = `/assets/concert/test/innerseat-${sector}.json`;
  const { data, loading, error } = FetchJson({ url: jsonUrl });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
                          <font color="#3300FF">{sector} 영역</font>의
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
                {data.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {section.rows.map((row, rowIndex) => (
                      <>
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
                              {`${section.sectionName} ${row.rowNumber}`}
                            </font>
                          </SeatT>
                          {row.seats.map((seat, seatIndex) => (
                            <span key={seatIndex}>
                              {seat.type === "R" ? (
                                <SeatR
                                  style={{
                                    ...selectedSeatsStyles[
                                      `${sector}-${section.sectionName}-${row.rowNumber}-${seat.position}`
                                    ],
                                    background: seat.color || "whitesmoke",
                                  }}
                                  onClick={() =>
                                    handleSeatClick(
                                      seat,
                                      section.sectionName,
                                      row.rowNumber
                                    )
                                  }
                                />
                              ) : (
                                <SeatB />
                              )}
                            </span>
                          ))}
                        </DivBr>
                        {Array.from({ length: row.breakAfter }, (_, i) => (
                          <br key={i} />
                        ))}
                      </>
                    ))}
                  </div>
                ))}
              </DivSeatBox>
            </td>
          </tr>
        </tbody>
      </TmgsTable>
    </>
  );
};

export default DoubleInnerSelector;
