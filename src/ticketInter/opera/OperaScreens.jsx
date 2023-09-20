import React, { useState, useEffect } from "react";
import { BackImage, Container, GetAJS, RightLeftDiv } from "./OperaStyle";
import SeatSelection from "./SeatSelection";

async function fetchSeatData() {
  const response = await fetch(
    `${process.env.PUBLIC_URL}/assets/temp/SetTempOpera.json`
  );
  const data = await response.json();
  return data;
}

function OperaScreens() {
  const [seatData, setSeatData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchSeatData();
      setSeatData(data);
    }

    loadData();
  }, []);
  return (
    <>
      <RightLeftDiv>
        <Container>
          <BackImage>
            {seatData.map((seat, index) => (
              <GetAJS
                key={index}
                role="button"
                tabindex="0"
                title={seat.setName}
                top={seat.position.top}
                left={seat.position.left}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
                  <g>
                    <rect width="8" height="8" x="0" y="0" fill="#1ca814">
                      <title>{seat.setName}</title>
                    </rect>
                  </g>
                </svg>
              </GetAJS>
            ))}
          </BackImage>
        </Container>
        <Container>
          <SeatSelection />
        </Container>
      </RightLeftDiv>
    </>
  );
}

export default OperaScreens;
