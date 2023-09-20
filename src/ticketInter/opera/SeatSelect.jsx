import React from "react";
import styled from "styled-components";

const SeatSelect = styled.div`
  margin: 0;
  padding: 0;
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  position: relative;
  width: 217px;
  margin-left: 5px;
`;

const Title = styled.h3`
  color: #636363;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 100%;
  height: 20px;
  padding-top: 2px;
  border-bottom: 2px solid #3a3a3a;
`;

const EA = styled.span`
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  zoom: 1;
  position: absolute;
  right: 0;
  top: 5px;
  color: #c00;
  font-size: 11px;
`;

const SeatChoice = styled.div`
  margin: 0;
  padding: 0;
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  width: 217px;
  height: 96px;
  background: url("//ticketimage.globalinterpark.com/ticketimage/TicketImage/onestop/bg_tbl_seat.gif")
    0 0 repeat-y;
  border-bottom: 1px solid #2b2a2a;
`;

const SeatTable = styled.table`
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
`;

const Choice = styled.div`
  margin: 0;
  padding: 0;
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  width: 217px;
`;

const ScrollY = styled.div`
  margin: 0;
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 59px;
  overflow: hidden;
  overflow-y: auto;
  padding: 5px 0;
`;

const SelectedSeat = styled.div`
  margin: 0;
  padding: 0;
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
`;

const SeatSelector = ({ selectedSeats }) => {
  return (
    <SeatSelect>
      <Title>
        <img
          src="//ticketimage.interpark.com/TicketImage/onestop/stit_seat_02.gif"
          alt="선택좌석"
        />
      </Title>
      <EA>
        총&nbsp;
        <span id="SelectedSeatCount" name="SelectedSeatCount">
          {selectedSeats.length}
        </span>
        석 선택되었습니다.
      </EA>
      <SeatChoice>
        <SeatTable className="seat1">
          <colgroup>
            <col width="75px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>좌석등급</th>
              <td>좌석번호</td>
            </tr>
          </tbody>
        </SeatTable>
        <Choice>
          <ScrollY>
            <SelectedSeat>
              <SeatTable className="seat2">
                <colgroup>
                  <col width="75px" />
                  <col width="*" />
                </colgroup>
                <tbody>
                  <ul>
                    {selectedSeats.map((seat, index) => (
                      <li key={index}>{seat.setName}</li>
                    ))}
                  </ul>
                </tbody>
              </SeatTable>
            </SelectedSeat>
          </ScrollY>
        </Choice>
      </SeatChoice>
    </SeatSelect>
  );
};

export default SeatSelector;
