import React from "react";
import { SeatContainer, SeatR, TitleSelection } from "./SeatSelectionStyle";
import SeatTable from "./SeatTable";
import SeatSelector from "./SeatSelect";

const SeatSelection = ({ selectedSeats }) => {
  return (
    <SeatContainer>
      <SeatR>
        {/* <img src="http://ticketimage.interpark.com/TicketImage/onestop/seat_noimg.gif"></img> */}
      </SeatR>
      <TitleSelection>
        <div>좌석 등급 / 잔여석 </div>
      </TitleSelection>
      <SeatTable></SeatTable>
      <SeatSelector selectedSeats={selectedSeats} />
    </SeatContainer>
  );
};

export default SeatSelection;
