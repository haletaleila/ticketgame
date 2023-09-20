import React from "react";
import {
  GradeDetail,
  LvDiv,
  LvSpan,
  LvStrong,
  LvStrongSpan,
  ScrollY,
  SeatGradeInfo,
  WarpList,
  WatchInfo,
  WrapColgroup,
  WrapTable,
  WrapTbody,
} from "./SeatTableStyle";

function SeatTable() {
  const seatData = [
    { grade: "VIP석", seats: "12석", price: "190,000원", bgColor: "#7C68EE" },
    { grade: "R석", seats: "100석", price: "160,000원", bgColor: "#1CA814" },
    { grade: "S석", seats: "65석", price: "130,000원", bgColor: "#17B3FF" },
    { grade: "A석", seats: "0석", price: "90,000원", bgColor: "#FB7E4E" },
  ];

  return (
    <WatchInfo>
      <ScrollY>
        <SeatGradeInfo id="SeatGradeInfo" name="">
          <WarpList>
            <WrapTable>
              <WrapColgroup>
                <col width="65%" />
                <col width="*" />
              </WrapColgroup>
              <WrapTbody>
                {seatData.map((row, index) => (
                  <tr key={index}>
                    <GradeDetail>
                      <LvDiv>
                        <LvSpan style={{ background: row.bgColor }}></LvSpan>
                        <LvStrong>
                          {row.grade} <LvStrongSpan>{row.seats}</LvStrongSpan>
                        </LvStrong>
                      </LvDiv>
                    </GradeDetail>
                    <td className="taR">{row.price}</td>
                  </tr>
                ))}
              </WrapTbody>
            </WrapTable>
          </WarpList>
        </SeatGradeInfo>
      </ScrollY>
    </WatchInfo>
  );
}

export default SeatTable;
