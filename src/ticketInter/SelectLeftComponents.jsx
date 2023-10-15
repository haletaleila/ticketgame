import React from "react";
import styled from "styled-components";

const SelectLeftComponents = () => {
  return (
    <SeatR>
      <Inner>
        <Theater>
          <ASeatUpdate>
            <img
              src="//ticketimage.interpark.com/TicketImage/onestop/btn_theater.gif"
              alt=""
            />
          </ASeatUpdate>
        </Theater>
        <TheaterList>
          <Title>
            <img
              src="//ticketimage.interpark.com/TicketImage/onestop/stit_seat_03.gif"
              alt="좌석등급 / 잔여석 "
            />
          </Title>
          <Btn>
            <ASeatPrice>
              <img
                src="//ticketimage.interpark.com/TicketImage/onestop/btn_price_all.gif"
                alt="가격 전체보기"
              />
            </ASeatPrice>
          </Btn>
          <WatchInfo>
            <ScrollY>
              <SeatGradeInfo>
                <WarpList>
                  <WarpListTable>
                    <WarpListTableColgroup>
                      <col width="65%" />
                      <col width="*" />
                    </WarpListTableColgroup>
                    <WarpListTableTbody>
                      <tr id="GradeRow" name="GradeRow">
                        <WarpListTableTbodyTd
                          colspan="2"
                          id="GradeDetail"
                          name="GradeDetail"
                        ></WarpListTableTbodyTd>
                      </tr>
                      <tr id="GradeRow" name="GradeRow">
                        <WarpListTableTbodyTd>
                          <div>
                            <WarpListTableTbodyTdSpan
                              class="lv"
                              style={{ background: "#7C68EE" }}
                            ></WarpListTableTbodyTdSpan>
                            <WarpListTableTbodyTdSelect>
                              <WarpListTableTbodyTdSelectStrong>
                                VIP석
                              </WarpListTableTbodyTdSelectStrong>{" "}
                              0석
                            </WarpListTableTbodyTdSelect>
                          </div>
                        </WarpListTableTbodyTd>
                        <WrapListTableTbodyTaR>165,000원</WrapListTableTbodyTaR>
                      </tr>
                      <tr>
                        <WarpListTableTbodyTd
                          colspan="2"
                          id="GradeDetail"
                          name="GradeDetail"
                          seatgrade="1"
                          seatgradename="VIP석"
                          salesprice="165,000"
                          remaincnt="0"
                          style={{ display: "none" }}
                        ></WarpListTableTbodyTd>
                      </tr>
                      <tr id="GradeRow" name="GradeRow">
                        <WarpListTableTbodyTd>
                          <div>
                            <WarpListTableTbodyTdSpan
                              class="lv"
                              style={{ background: "#1CA814" }}
                            ></WarpListTableTbodyTdSpan>
                            <WarpListTableTbodyTdSelect>
                              <WarpListTableTbodyTdSelectStrong>
                                SR석
                              </WarpListTableTbodyTdSelectStrong>{" "}
                              0석
                            </WarpListTableTbodyTdSelect>
                          </div>
                        </WarpListTableTbodyTd>
                        <WrapListTableTbodyTaR>154,000원</WrapListTableTbodyTaR>
                      </tr>
                      <tr>
                        <WarpListTableTbodyTd
                          colspan="2"
                          id="GradeDetail"
                          name="GradeDetail"
                          seatgrade="2"
                          seatgradename="SR석"
                          salesprice="154,000"
                          remaincnt="0"
                          style={{ display: "none" }}
                        ></WarpListTableTbodyTd>
                      </tr>
                      <tr id="GradeRow" name="GradeRow">
                        <WarpListTableTbodyTd>
                          <div>
                            <WarpListTableTbodyTdSpan
                              class="lv"
                              style={{ background: "#17B3FF" }}
                            ></WarpListTableTbodyTdSpan>
                            <WarpListTableTbodyTdSelect>
                              <WarpListTableTbodyTdSelectStrong>
                                R석
                              </WarpListTableTbodyTdSelectStrong>{" "}
                              0석
                            </WarpListTableTbodyTdSelect>
                          </div>
                        </WarpListTableTbodyTd>
                        <WrapListTableTbodyTaR>143,000원</WrapListTableTbodyTaR>
                      </tr>
                      <tr>
                        <WarpListTableTbodyTd
                          colspan="2"
                          id="GradeDetail"
                          name="GradeDetail"
                          seatgrade="3"
                          seatgradename="R석"
                          salesprice="143,000"
                          remaincnt="0"
                          style={{ display: "none" }}
                        ></WarpListTableTbodyTd>
                      </tr>
                      <tr id="GradeRow" name="GradeRow">
                        <WarpListTableTbodyTd>
                          <div>
                            <WarpListTableTbodyTdSpan
                              class="lv"
                              style={{ background: "#FB7E4E" }}
                            ></WarpListTableTbodyTdSpan>
                            <WarpListTableTbodyTdSelect>
                              <WarpListTableTbodyTdSelectStrong>
                                S석
                              </WarpListTableTbodyTdSelectStrong>{" "}
                              0석
                            </WarpListTableTbodyTdSelect>
                          </div>
                        </WarpListTableTbodyTd>
                        <WrapListTableTbodyTaR>121,000원</WrapListTableTbodyTaR>
                      </tr>
                      <tr>
                        <WarpListTableTbodyTd
                          colspan="2"
                          id="GradeDetail"
                          name="GradeDetail"
                          seatgrade="4"
                          seatgradename="S석"
                          salesprice="121,000"
                          remaincnt="0"
                          style={{ display: "none" }}
                        ></WarpListTableTbodyTd>
                      </tr>
                    </WarpListTableTbody>
                  </WarpListTable>
                </WarpList>
              </SeatGradeInfo>
            </ScrollY>
          </WatchInfo>
        </TheaterList>
        <SeatSelect1>
          <Seat1Title>
            <img
              src="//ticketimage.interpark.com/TicketImage/onestop/stit_seat_02.gif"
              alt="선택좌석"
            />
          </Seat1Title>
          <Ea>
            총&nbsp;
            <span id="SelectedSeatCount" name="SelectedSeatCount">
              0
            </span>
            석 선택되었습니다.
          </Ea>
          <SeatChoice>
            <Seat1>
              <colgroup>
                <col width="75px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <Seat1Th>좌석등급</Seat1Th>
                  <Seat1Td>좌석번호</Seat1Td>
                </tr>
              </tbody>
            </Seat1>
            <Seat1Choice>
              <Seat1ScrollY>
                <div id="SelectedSeat" name="SelectedSeat">
                  <Seat2>
                    <colgroup>
                      <col width="75px" />
                      <col width="*" />
                    </colgroup>
                    <tbody></tbody>
                  </Seat2>
                </div>
              </Seat1ScrollY>
            </Seat1Choice>
          </SeatChoice>
        </SeatSelect1>

        <BtnWarp>
          <BtnASelect>
            <img
              id="NextStepImage"
              src="http://ticketimage.interpark.com/TicketImage/onestop/btn_seat_confirm.gif"
              alt="좌석선택완료"
            />
          </BtnASelect>
          <Fll>
            <FllACancle>
              <img
                src="//ticketimage.interpark.com/TicketImage/onestop/btn_seat_prev.gif"
                alt="이전단계"
              />
            </FllACancle>
          </Fll>
          <Flr>
            <FlrARefresh>
              <img
                src="//ticketimage.interpark.com/TicketImage/onestop/btn_seat_again.gif"
                alt="좌석 다시 선택"
              />
            </FlrARefresh>
          </Flr>
        </BtnWarp>
        <Matter>
          <img
            src="//ticketimage.interpark.com/TicketImage/onestop/icon_matter.gif"
            alt="유의사항"
          />
          좌석 선택시 유의사항
        </Matter>
      </Inner>
    </SeatR>
  );
};

const Matter = styled.div`
  text-align: right;
  cursor: pointer;
  text-decoration: underline;
  font-size: 11px;
  color: #333;
  letter-spacing: -1px;
`;

const FlrARefresh = styled.a`
  font-size: 0;
  display: inline-block;
  cursor: pointer;
`;

const FllACancle = styled.a`
  font-size: 0;
  display: inline-block;
  cursor: pointer;
`;

const Fll = styled.p`
  margin-top: 1px;
  float: left;
`;

const Flr = styled.p`
  margin-top: 1px;
  float: right;
`;

const BtnASelect = styled.a`
  font-size: 0;
  display: inline-block;
  cursor: pointer;
`;

const BtnWarp = styled.div`
  position: relative;
  width: 217px;
  margin: 5px 0 5px 5px;
  overflow: visible;
  clear: both;
  *+font-size: 0;
`;

const Seat2 = styled.table`
  width: 200px;
`;

const Seat1ScrollY = styled.div`
  width: 100%;
  height: 128px;
  overflow: hidden;
  overflow-y: auto;
  padding: 5px 0;
  margin-top: 2px;
`;

const Seat1Choice = styled.div`
  width: 217px;
`;

const Seat1Title = styled.h3`
  height: 20px;
  padding-top: 2px;
  border-bottom: 2px solid #3a3a3a;
`;

const Seat1Td = styled.td`
  padding: 6px 0 4px 15px;
  text-align: left;
  color: #000;
  border-bottom: 1px solid #c4c4c4;
`;

const Seat1Th = styled.th`
  padding: 6px 0 4px 4px;
  text-align: left;
  font-weight: normal;
  letter-spacing: -1px;
  line-height: 15px;
  color: #666;
  border-bottom: 1px solid #c4c4c4;
`;

const Seat1 = styled.table`
  width: 100%;
`;

const SeatChoice = styled.div`
  width: 217px;
  height: 168px;
  background: url("//ticketimage.globalinterpark.com/ticketimage/TicketImage/onestop/bg_tbl_seat.gif")
    0 0 repeat-y;
  border-bottom: 1px solid #2b2a2a;
`;

const Ea = styled.span`
  zoom: 1;
  position: absolute;
  right: 0;
  top: 5px;
  color: #c00;
  font-size: 11px;
`;

const SeatSelect1 = styled.div`
  position: relative;
  width: 217px;
  margin-left: 5px;
`;

const WrapListTableTbodyTaR = styled.td`
  text-align: right;
  padding-right: 5px;
  color: #666;
  font-size: 12px;
  letter-spacing: 0;
`;

const WarpListTableTbodyTdSelectStrong = styled.strong`
  font-size: 12px;
  color: #666;
`;

const WarpListTableTbodyTdSelect = styled.span`
  zoom: 1;
  cursor: pointer;
`;

const WarpListTableTbodyTdSpan = styled.span`
  zoom: 1;
  width: 8px;
  height: 8px;
  font-size: 2px;
  display: inline-block;
  margin: 0 6px;
`;

const WarpListTableTbodyTd = styled.td`
  padding: 4px 0 2px;
  font-size: 11px;
  color: #c66;
  letter-spacing: -1px;
`;

const WarpListTableTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const WarpListTableColgroup = styled.colgroup`
  display: table-column-group;
`;

const WarpListTable = styled.table`
  width: 100%;
  margin-top: 3px;
`;

const WarpList = styled.div`
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
`;

const SeatGradeInfo = styled.div`
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
`;

const ScrollY = styled.div`
  position: relative;
  width: 100%;
  height: 167px;
  overflow: hidden;
  overflow-y: auto;
`;

const WatchInfo = styled.div`
  position: relative;
  width: 210px;
  height: 167px;
  padding: 2px 0 0 5px;
  border: 1px solid #d1d1d1;
  background: #fff;
`;

const ASeatPrice = styled.a`
  color: #686868;
  text-decoration: none;
`;

const Btn = styled.span`
  position: absolute;
  right: 0;
  top: 0;
`;

const Title = styled.h3`
  height: 21px;
  padding-top: 2px;
  font-size: 100%;
  margin: 0;
  padding: 0;
`;

const TheaterList = styled.div`
  position: relative;
  width: 217px;
  height: 211px;
  margin-left: 5px;
`;

const SeatR = styled.div`
  color: #636363;
  font-size: 12px;
  font-family: "Verdana", Arial, Helvetica, sans-serif;
  float: right;
  width: 222px;
`;

const Inner = styled.div`
  overflow: hidden;
`;

const Theater = styled.p`
  height: 77px;
  margin-left: 4px;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const ASeatUpdate = styled.a`
  color: #686868;
  text-decoration: none;
  cursor: pointer;
`;
export default SelectLeftComponents;
