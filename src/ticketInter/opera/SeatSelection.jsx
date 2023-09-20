import React from "react";
import { SeatContainer, SeatR, TitleSelection } from "./SeatSelectionStyle";

function SeatSelection() {
  return (
    <SeatContainer>
      <SeatR>
        <div>원하시는 좌석 위치를 선택해주세요</div>
        <img src="http://ticketimage.interpark.com/TicketImage/onestop/seat_noimg.gif"></img>
      </SeatR>
      <TitleSelection>
        <img
          src="//ticketimage.interpark.com/TicketImage/onestop/stit_seat_01.gif"
          alt="좌석등급 / 잔여석 "
        ></img>
      </TitleSelection>
    </SeatContainer>
  );
}

export default SeatSelection;
