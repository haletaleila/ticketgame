import React, { useState } from "react";
import styled from "styled-components";
import FetchJson from "../../common/component/json/FetchJson";

const DoubleOuterSelector = ({ onAreaClick }) => {
  const [selectedAreaId, setSelectedAreaId] = useState(null);

  const jsonUrl = `/assets/concert/test/test.json`;
  const { data, loading, error } = FetchJson({ url: jsonUrl });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <table
      width="100%"
      height="100%"
      cellpadding="0"
      cellspacing="0"
      id="TmgsTable"
      name="TmgsTable"
    >
      <tbody>
        <tr>
          <td valign="top" style={{ padding: "20px" }} nowrap="true">
            <table width="600" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td width="4" height="4">
                    <img
                      src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_01.gif"
                      width="4"
                      height="4"
                    />
                  </td>
                  <td background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_top.gif"></td>
                  <td>
                    <img
                      src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_01.gif"
                      width="4"
                      height="4"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    width="4"
                    background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_bg.gif"
                  ></td>
                  <td bgcolor="#EBEBEB">
                    <font color="#3300FF">
                      <img
                        src="//ticketimage.interpark.com/TicketImage/event/061227/dot_03.gif"
                        width="5"
                        height="5"
                        align="absmiddle"
                      />
                    </font>{" "}
                    원하시는 영역을 선택해주세요. 공연장에서 위치를 클릭하거나,
                    오른쪽의 좌석을 선택해주세요.
                  </td>
                  <td background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_bg.gif"></td>
                </tr>
                <tr>
                  <td width="4" height="4">
                    <img
                      src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_left_02.gif"
                      width="4"
                      height="4"
                    />
                  </td>
                  <td background="http://ticketimage.interpark.com/TicketImage/event/061227/seat_nt_bottom.gif"></td>
                  <td>
                    <img
                      src="//ticketimage.interpark.com/TicketImage/event/061227/seat_nt_right_02.gif"
                      width="4"
                      height="4"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />

            <title>08000885</title>
            <meta
              http-equiv="Content-Type"
              content="text/html; charset=euc-kr"
            />

            <img
              src="http://ticketimage.interpark.com/TMGSNAS/TMGS/MiniMapHtml/23/img/23001192.gif"
              alt=""
              width="600"
              height="540"
              border="0"
              usemap="#Map"
            />
            <map name="Map">
              {data.map((area) => (
                <area
                  key={area.id}
                  shape={area.shape}
                  coords={area.coords}
                  alt={area.id}
                  onfocus="this.blur()"
                  style={{ cursor: "pointer" }}
                  onClick={() => onAreaClick(area.id)}
                />
              ))}
            </map>
            {/* 
                  <area
                    shape="poly"
                    coords="198,354,206,348,209,349,216,363,210,371,203,360"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '008')"
                    onmouseover="javascript:EventBlockOver(this, '008')"
                    onmouseout="javascript:EventBlockOut(this, '008')"
                  />
                  <area
                    shape="rect"
                    coords="273,354,329,407"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '006')"
                    onmouseover="javascript:EventBlockOver(this, '006')"
                    onmouseout="javascript:EventBlockOut(this, '006')"
                  />
                  <area
                    shape="poly"
                    coords="219,377,218,367,243,362,267,342,269,409,231,398"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '007')"
                    onmouseover="javascript:EventBlockOver(this, '007')"
                    onmouseout="javascript:EventBlockOut(this, '007')"
                  />
                  <area
                    shape="poly"
                    coords="332,351,343,348,357,363,382,367,374,393,332,407"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '005')"
                    onmouseover="javascript:EventBlockOver(this, '005')"
                    onmouseout="javascript:EventBlockOut(this, '005')"
                  />
                  <area
                    shape="poly"
                    coords="386,356,394,350,397,351,401,356,391,371,384,365"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '004')"
                    onmouseover="javascript:EventBlockOver(this, '004')"
                    onmouseout="javascript:EventBlockOut(this, '004')"
                  />
                  <area
                    shape="poly"
                    coords="354,313,408,283,412,316,404,339,394,343,383,324"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '003')"
                    onmouseover="javascript:EventBlockOver(this, '003')"
                    onmouseout="javascript:EventBlockOut(this, '003')"
                  />
                  <area
                    shape="poly"
                    coords="332,258,377,233,389,254,402,278,359,305,335,267"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '002')"
                    onmouseover="javascript:EventBlockOver(this, '002')"
                    onmouseout="javascript:EventBlockOut(this, '002')"
                  />
                  <area
                    shape="poly"
                    coords="307,200,306,190,351,207,374,227,326,257,320,246"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '001')"
                    onmouseover="javascript:EventBlockOver(this, '001')"
                    onmouseout="javascript:EventBlockOut(this, '001')"
                  />
                  <area
                    shape="poly"
                    coords="421,205,400,222,391,215,379,206,397,180,412,193"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '122')"
                    onmouseover="javascript:EventBlockOver(this, '122')"
                    onmouseout="javascript:EventBlockOut(this, '122')"
                  />
                  <area
                    shape="poly"
                    coords="393,178,377,203,365,196,350,189,364,159,377,167"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '121')"
                    onmouseover="javascript:EventBlockOver(this, '121')"
                    onmouseout="javascript:EventBlockOut(this, '121')"
                  />
                  <area
                    shape="poly"
                    coords="358,157,347,189,334,184,320,182,324,149,342,151"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '120')"
                    onmouseover="javascript:EventBlockOver(this, '120')"
                    onmouseout="javascript:EventBlockOut(this, '120')"
                  />
                  <area
                    shape="poly"
                    coords="319,149,315,181,304,179,288,182,283,148,302,147"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '119')"
                    onmouseover="javascript:EventBlockOver(this, '119')"
                    onmouseout="javascript:EventBlockOut(this, '119')"
                  />
                  <area
                    shape="poly"
                    coords="278,147,283,181,272,185,256,189,245,157,259,150"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '118')"
                    onmouseover="javascript:EventBlockOver(this, '118')"
                    onmouseout="javascript:EventBlockOut(this, '118')"
                  />
                  <area
                    shape="poly"
                    coords="240,160,252,189,239,194,229,202,208,177,224,166"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '117')"
                    onmouseover="javascript:EventBlockOver(this, '117')"
                    onmouseout="javascript:EventBlockOut(this, '117')"
                  />
                  <area
                    shape="poly"
                    coords="205,178,223,204,216,212,205,223,180,202,190,190"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '116')"
                    onmouseover="javascript:EventBlockOver(this, '116')"
                    onmouseout="javascript:EventBlockOut(this, '116')"
                  />
                  <area
                    shape="poly"
                    coords="461,258,456,243,509,220,515,235,523,260,462,271"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '224')"
                    onmouseover="javascript:EventBlockOver(this, '224')"
                    onmouseout="javascript:EventBlockOut(this, '224')"
                  />
                  <area
                    shape="poly"
                    coords="445,220,430,200,476,165,491,186,508,219,452,240"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '223')"
                    onmouseover="javascript:EventBlockOver(this, '223')"
                    onmouseout="javascript:EventBlockOut(this, '223')"
                  />
                  <area
                    shape="poly"
                    coords="413,180,396,166,429,119,453,138,474,162,427,199"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '252')"
                    onmouseover="javascript:EventBlockOver(this, '252')"
                    onmouseout="javascript:EventBlockOut(this, '252')"
                    alt="252영역
    [R석] 0석
    [S석] 0석"
                    title="252영역
    [R석] 0석
    [S석] 0석"
                  />
                  <area
                    shape="poly"
                    coords="378,158,366,151,388,97,405,104,424,117,391,167"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '251')"
                    onmouseover="javascript:EventBlockOver(this, '251')"
                    onmouseout="javascript:EventBlockOut(this, '251')"
                    alt="251영역
    [R석] 0석
    [S석] 0석"
                    title="251영역
    [R석] 0석
    [S석] 0석"
                  />
                  <area
                    shape="poly"
                    coords="350,146,338,142,349,85,367,89,385,96,362,150"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '250')"
                    onmouseover="javascript:EventBlockOver(this, '250')"
                    onmouseout="javascript:EventBlockOut(this, '250')"
                  />
                  <area
                    shape="poly"
                    coords="315,141,302,137,303,78,326,80,347,84,336,140"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '249')"
                    onmouseover="javascript:EventBlockOver(this, '249')"
                    onmouseout="javascript:EventBlockOut(this, '249')"
                  />
                  <area
                    shape="poly"
                    coords="282,137,268,139,255,83,276,80,299,80,298,139"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '248')"
                    onmouseover="javascript:EventBlockOver(this, '248')"
                    onmouseout="javascript:EventBlockOut(this, '248')"
                  />
                  <area
                    shape="poly"
                    coords="251,146,241,149,216,95,232,89,252,85,265,144"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '247')"
                    onmouseover="javascript:EventBlockOver(this, '247')"
                    onmouseout="javascript:EventBlockOut(this, '247')"
                  />
                  <area
                    shape="poly"
                    coords="221,159,210,164,178,116,192,106,214,97,238,151"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '246')"
                    onmouseover="javascript:EventBlockOver(this, '246')"
                    onmouseout="javascript:EventBlockOut(this, '246')"
                  />
                  <area
                    shape="poly"
                    coords="191,180,174,196,126,162,148,136,174,118,207,167"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '245')"
                    onmouseover="javascript:EventBlockOver(this, '245')"
                    onmouseout="javascript:EventBlockOut(this, '245')"
                  />
                  <area
                    shape="poly"
                    coords="159,219,150,238,92,216,107,187,125,164,171,200"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '244')"
                    onmouseover="javascript:EventBlockOver(this, '244')"
                    onmouseout="javascript:EventBlockOut(this, '244')"
                  />
                  <area
                    shape="poly"
                    coords="141,255,138,270,79,260,84,240,89,220,146,242"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '243')"
                    onmouseover="javascript:EventBlockOver(this, '243')"
                    onmouseout="javascript:EventBlockOut(this, '243')"
                  />
                  <area
                    shape="poly"
                    coords="465,306,525,308,522,332,521,348,465,335,466,320"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '226')"
                    onmouseover="javascript:EventBlockOver(this, '226')"
                    onmouseout="javascript:EventBlockOut(this, '226')"
                  />
                  <area
                    shape="poly"
                    coords="408,248,440,234,446,249,453,268,422,275,411,257"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '101')"
                    onmouseover="javascript:EventBlockOver(this, '101')"
                    onmouseout="javascript:EventBlockOut(this, '101')"
                  />
                  <area
                    shape="poly"
                    coords="181,422,141,465,125,448,112,430,165,396,175,408"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '238')"
                    onmouseover="javascript:EventBlockOver(this, '238')"
                    onmouseout="javascript:EventBlockOut(this, '238')"
                  />
                  <area
                    shape="poly"
                    coords="146,274,177,283,180,291,176,309,143,311,143,291"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '114')"
                    onmouseover="javascript:EventBlockOver(this, '114')"
                    onmouseout="javascript:EventBlockOut(this, '114')"
                  />
                  <area
                    shape="poly"
                    coords="436,396,486,429,473,449,458,465,420,421,429,408"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '229')"
                    onmouseover="javascript:EventBlockOver(this, '229')"
                    onmouseout="javascript:EventBlockOut(this, '229')"
                  />
                  <area
                    shape="poly"
                    coords="135,319,138,334,78,347,76,324,75,306,136,306"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '241')"
                    onmouseover="javascript:EventBlockOver(this, '241')"
                    onmouseout="javascript:EventBlockOut(this, '241')"
                  />
                  <area
                    shape="poly"
                    coords="135,290,136,301,75,302,77,277,78,263,137,273"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '242')"
                    onmouseover="javascript:EventBlockOver(this, '242')"
                    onmouseout="javascript:EventBlockOut(this, '242')"
                  />
                  <area
                    shape="poly"
                    coords="206,441,173,491,155,479,142,467,186,422,198,432"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '237')"
                    onmouseover="javascript:EventBlockOver(this, '237')"
                    onmouseout="javascript:EventBlockOut(this, '237')"
                  />
                  <area
                    shape="poly"
                    coords="204,386,210,394,225,405,206,431,193,421,180,408"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '111')"
                    onmouseover="javascript:EventBlockOver(this, '111')"
                    onmouseout="javascript:EventBlockOut(this, '111')"
                  />
                  <area
                    shape="poly"
                    coords="399,386,421,405,409,419,397,429,380,404,390,395"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '105')"
                    onmouseover="javascript:EventBlockOver(this, '105')"
                    onmouseout="javascript:EventBlockOut(this, '105')"
                  />
                  <area
                    shape="poly"
                    coords="158,236,190,252,185,265,180,279,146,269,152,249"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '115')"
                    onmouseover="javascript:EventBlockOver(this, '115')"
                    onmouseout="javascript:EventBlockOut(this, '115')"
                  />
                  <area
                    shape="poly"
                    coords="285,429,280,463,263,460,245,454,255,424,269,425"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '109')"
                    onmouseover="javascript:EventBlockOver(this, '109')"
                    onmouseout="javascript:EventBlockOut(this, '109')"
                  />
                  <area
                    shape="poly"
                    coords="178,342,149,351,145,334,143,315,179,315,181,327"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '113')"
                    onmouseover="javascript:EventBlockOver(this, '113')"
                    onmouseout="javascript:EventBlockOut(this, '113')"
                  />
                  <area
                    shape="poly"
                    coords="422,279,456,274,456,290,457,309,425,307,422,290"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '102')"
                    onmouseover="javascript:EventBlockOver(this, '102')"
                    onmouseout="javascript:EventBlockOut(this, '102')"
                    alt="102영역
    [SR석] 0석"
                    title="102영역
    [SR석] 0석"
                  />
                  <area
                    shape="poly"
                    coords="142,349,146,364,92,387,83,371,79,350,138,338"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '240')"
                    onmouseover="javascript:EventBlockOver(this, '240')"
                    onmouseout="javascript:EventBlockOut(this, '240')"
                  />
                  <area
                    shape="poly"
                    coords="463,338,520,351,514,372,508,388,455,365,459,353"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '227')"
                    onmouseover="javascript:EventBlockOver(this, '227')"
                    onmouseout="javascript:EventBlockOut(this, '227')"
                  />
                  <area
                    shape="poly"
                    coords="151,355,184,344,188,355,193,373,164,386,156,370"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '112')"
                    onmouseover="javascript:EventBlockOver(this, '112')"
                    onmouseout="javascript:EventBlockOut(this, '112')"
                  />
                  <area
                    shape="poly"
                    coords="414,421,457,466,436,483,425,491,395,442,403,433"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '230')"
                    onmouseover="javascript:EventBlockOver(this, '230')"
                    onmouseout="javascript:EventBlockOut(this, '230')"
                  />
                  <area
                    shape="poly"
                    coords="267,465,255,523,235,522,215,513,238,456,256,463"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '235')"
                    onmouseover="javascript:EventBlockOver(this, '235')"
                    onmouseout="javascript:EventBlockOut(this, '235')"
                  />
                  <area
                    shape="poly"
                    coords="361,457,384,513,365,519,347,524,333,466,350,462"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '232')"
                    onmouseover="javascript:EventBlockOver(this, '232')"
                    onmouseout="javascript:EventBlockOut(this, '232')"
                  />
                  <area
                    shape="poly"
                    coords="422,313,458,314,454,330,451,349,421,340,419,327"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '103')"
                    onmouseover="javascript:EventBlockOver(this, '103')"
                    onmouseout="javascript:EventBlockOut(this, '103')"
                  />
                  <area
                    shape="poly"
                    coords="415,342,412,351,407,370,436,386,445,365,450,353"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '104')"
                    onmouseover="javascript:EventBlockOver(this, '104')"
                    onmouseout="javascript:EventBlockOut(this, '104')"
                  />
                  <area
                    shape="poly"
                    coords="390,443,424,493,398,506,387,511,365,456,378,450"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '231')"
                    onmouseover="javascript:EventBlockOver(this, '231')"
                    onmouseout="javascript:EventBlockOut(this, '231')"
                  />
                  <area
                    shape="poly"
                    coords="453,368,507,390,501,407,488,427,438,395,448,380"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '228')"
                    onmouseover="javascript:EventBlockOver(this, '228')"
                    onmouseout="javascript:EventBlockOut(this, '228')"
                  />
                  <area
                    shape="poly"
                    coords="159,394,112,427,97,403,91,390,145,369,156,380"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '239')"
                    onmouseover="javascript:EventBlockOver(this, '239')"
                    onmouseout="javascript:EventBlockOut(this, '239')"
                  />
                  <area
                    shape="poly"
                    coords="331,426,348,421,359,452,345,456,323,461,318,430"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '107')"
                    onmouseover="javascript:EventBlockOver(this, '107')"
                    onmouseout="javascript:EventBlockOut(this, '107')"
                  />
                  <area
                    shape="poly"
                    coords="235,454,213,510,192,502,176,492,209,444,224,447"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '236')"
                    onmouseover="javascript:EventBlockOver(this, '236')"
                    onmouseout="javascript:EventBlockOut(this, '236')"
                  />
                  <area
                    shape="poly"
                    coords="463,275,523,263,526,280,526,303,466,302,465,286"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '225')"
                    onmouseover="javascript:EventBlockOver(this, '225')"
                    onmouseout="javascript:EventBlockOut(this, '225')"
                  />
                  <area
                    shape="poly"
                    coords="394,432,380,443,362,451,351,418,364,415,376,408"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '106')"
                    onmouseover="javascript:EventBlockOver(this, '106')"
                    onmouseout="javascript:EventBlockOut(this, '106')"
                  />
                  <area
                    shape="poly"
                    coords="297,468,298,528,278,529,257,525,271,466,287,468"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '234')"
                    onmouseover="javascript:EventBlockOver(this, '234')"
                    onmouseout="javascript:EventBlockOut(this, '234')"
                  />
                  <area
                    shape="poly"
                    coords="251,420,241,452,224,444,208,433,227,408,237,411"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '110')"
                    onmouseover="javascript:EventBlockOver(this, '110')"
                    onmouseout="javascript:EventBlockOut(this, '110')"
                  />
                  <area
                    shape="poly"
                    coords="331,468,343,525,319,529,300,529,303,469,318,468"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '233')"
                    onmouseover="javascript:EventBlockOver(this, '233')"
                    onmouseout="javascript:EventBlockOut(this, '233')"
                  />
                </map>
                <map name="Map">
                  <area
                    shape="rect"
                    coords="377,263,420,334"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '113')"
                    onmouseover="javascript:EventBlockOver(this, '113')"
                    onmouseout="javascript:EventBlockOut(this, '113')"
                  />
                  <area
                    shape="rect"
                    coords="276,253,319,302"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '111')"
                    onmouseover="javascript:EventBlockOver(this, '111')"
                    onmouseout="javascript:EventBlockOut(this, '111')"
                  />
                  <area
                    shape="rect"
                    coords="227,252,274,302"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '110')"
                    onmouseover="javascript:EventBlockOver(this, '110')"
                    onmouseout="javascript:EventBlockOut(this, '110')"
                  />
                  <area
                    shape="rect"
                    coords="179,252,226,302"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '109')"
                    onmouseover="javascript:EventBlockOver(this, '109')"
                    onmouseout="javascript:EventBlockOut(this, '109')"
                  />
                  <area
                    shape="rect"
                    coords="324,169,368,247"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '105')"
                    onmouseover="javascript:EventBlockOver(this, '105')"
                    onmouseout="javascript:EventBlockOut(this, '105')"
                  />
                  <area
                    shape="rect"
                    coords="373,183,417,249"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '106')"
                    onmouseover="javascript:EventBlockOver(this, '106')"
                    onmouseout="javascript:EventBlockOut(this, '106')"
                  />
                  <area
                    shape="rect"
                    coords="275,169,321,247"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '104')"
                    onmouseover="javascript:EventBlockOver(this, '104')"
                    onmouseout="javascript:EventBlockOut(this, '104')"
                  />
                  <area
                    shape="rect"
                    coords="178,184,223,247"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '102')"
                    onmouseover="javascript:EventBlockOver(this, '102')"
                    onmouseout="javascript:EventBlockOut(this, '102')"
                  />
                  <area
                    shape="rect"
                    coords="227,169,272,249"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '103')"
                    onmouseover="javascript:EventBlockOver(this, '103')"
                    onmouseout="javascript:EventBlockOut(this, '103')"
                  />
                  <area
                    shape="poly"
                    coords="463,243,462,259,461,280,493,285,496,269,499,243"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '004')"
                    onmouseover="javascript:EventBlockOver(this, '004')"
                    onmouseout="javascript:EventBlockOut(this, '004')"
                  />
                  <area
                    shape="poly"
                    coords="154,412,112,465,85,437,65,416,122,379,134,395"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '039')"
                    onmouseover="javascript:EventBlockOver(this, '039')"
                    onmouseout="javascript:EventBlockOut(this, '039')"
                  />
                  <area
                    shape="poly"
                    coords="321,408,324,444,299,445,278,445,280,409,302,410"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '009')"
                    onmouseover="javascript:EventBlockOver(this, '009')"
                    onmouseout="javascript:EventBlockOut(this, '009')"
                  />
                  <area
                    shape="poly"
                    coords="351,463,367,523,337,528,300,531,300,469,329,466"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '035')"
                    onmouseover="javascript:EventBlockOver(this, '035')"
                    onmouseout="javascript:EventBlockOut(this, '035')"
                  />
                  <area
                    shape="poly"
                    coords="522,230,589,225,590,261,587,289,521,280,522,253"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '029')"
                    onmouseover="javascript:EventBlockOver(this, '029')"
                    onmouseout="javascript:EventBlockOut(this, '029')"
                  />
                  <area
                    shape="poly"
                    coords="154,316,124,331,116,314,109,291,143,284,147,301"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '013')"
                    onmouseover="javascript:EventBlockOver(this, '013')"
                    onmouseout="javascript:EventBlockOut(this, '013')"
                  />
                  <area
                    shape="poly"
                    coords="481,375,534,417,512,441,488,465,448,415,466,392"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '032')"
                    onmouseover="javascript:EventBlockOver(this, '032')"
                    onmouseout="javascript:EventBlockOut(this, '032')"
                  />
                  <area
                    shape="poly"
                    coords="119,376,66,414,47,386,31,358,96,333,108,356"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '040')"
                    onmouseover="javascript:EventBlockOver(this, '040')"
                    onmouseout="javascript:EventBlockOut(this, '040')"
                  />
                  <area
                    shape="poly"
                    coords="392,381,413,410,394,422,374,430,360,399,381,389"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '007')"
                    onmouseover="javascript:EventBlockOver(this, '007')"
                    onmouseout="javascript:EventBlockOut(this, '007')"
                  />
                  <area
                    shape="poly"
                    coords="251,461,233,526,201,515,171,501,202,444,225,454"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '037')"
                    onmouseover="javascript:EventBlockOver(this, '037')"
                    onmouseout="javascript:EventBlockOut(this, '037')"
                  />
                  <area
                    shape="poly"
                    coords="356,401,371,434,350,439,328,443,325,411,341,407"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '008')"
                    onmouseover="javascript:EventBlockOver(this, '008')"
                    onmouseout="javascript:EventBlockOut(this, '008')"
                  />
                  <area
                    shape="poly"
                    coords="459,283,493,292,488,311,479,333,446,316,455,296"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '005')"
                    onmouseover="javascript:EventBlockOver(this, '005')"
                    onmouseout="javascript:EventBlockOut(this, '005')"
                  />
                  <area
                    shape="poly"
                    coords="198,442,167,501,140,485,113,465,159,415,178,430"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '038')"
                    onmouseover="javascript:EventBlockOver(this, '038')"
                    onmouseout="javascript:EventBlockOut(this, '038')"
                  />
                  <area
                    shape="poly"
                    coords="300,468,300,531,268,532,232,526,249,461,277,466"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '036')"
                    onmouseover="javascript:EventBlockOver(this, '036')"
                    onmouseout="javascript:EventBlockOut(this, '036')"
                  />
                  <area
                    shape="poly"
                    coords="82,280,14,288,10,254,13,224,81,233,79,253"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '042')"
                    onmouseover="javascript:EventBlockOver(this, '042')"
                    onmouseout="javascript:EventBlockOut(this, '042')"
                  />
                  <area
                    shape="poly"
                    coords="279,408,274,445,250,439,232,434,244,400,261,407"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '010')"
                    onmouseover="javascript:EventBlockOver(this, '010')"
                    onmouseout="javascript:EventBlockOut(this, '010')"
                  />
                  <area
                    shape="poly"
                    coords="239,399,225,430,204,419,187,410,209,382,223,390"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '011')"
                    onmouseover="javascript:EventBlockOver(this, '011')"
                    onmouseout="javascript:EventBlockOut(this, '011')"
                  />
                  <area
                    shape="poly"
                    coords="95,329,31,355,21,324,13,292,82,282,86,300"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '041')"
                    onmouseover="javascript:EventBlockOver(this, '041')"
                    onmouseout="javascript:EventBlockOut(this, '041')"
                  />
                  <area
                    shape="poly"
                    coords="520,282,586,293,578,328,569,355,506,329,514,305"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '030')"
                    onmouseover="javascript:EventBlockOver(this, '030')"
                    onmouseout="javascript:EventBlockOut(this, '030')"
                  />
                  <area
                    shape="poly"
                    coords="205,379,184,406,165,389,152,376,180,353,191,367"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '012')"
                    onmouseover="javascript:EventBlockOver(this, '012')"
                    onmouseout="javascript:EventBlockOut(this, '012')"
                  />
                  <area
                    shape="poly"
                    coords="444,415,487,466,462,485,432,500,404,441,421,432"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '033')"
                    onmouseover="javascript:EventBlockOver(this, '033')"
                    onmouseout="javascript:EventBlockOut(this, '033')"
                  />
                  <area
                    shape="poly"
                    coords="423,355,450,378,431,395,417,408,397,378,416,363"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '006')"
                    onmouseover="javascript:EventBlockOver(this, '006')"
                    onmouseout="javascript:EventBlockOut(this, '006')"
                  />
                  <area
                    shape="poly"
                    coords="401,445,429,503,396,516,370,524,353,461,380,453"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '034')"
                    onmouseover="javascript:EventBlockOver(this, '034')"
                    onmouseout="javascript:EventBlockOut(this, '034')"
                  />
                  <area
                    shape="poly"
                    coords="143,280,109,287,105,266,105,243,140,244,138,262"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '014')"
                    onmouseover="javascript:EventBlockOver(this, '014')"
                    onmouseout="javascript:EventBlockOut(this, '014')"
                  />
                  <area
                    shape="poly"
                    coords="504,331,570,358,552,389,538,413,483,373,494,355"
                    onfocus="this.blur()"
                    href="javascript:GetBlockSeatList('', '', '031')"
                    onmouseover="javascript:EventBlockOver(this, '031')"
                    onmouseout="javascript:EventBlockOut(this, '031')"
                  /> */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const TableCallerMainTableTbodyTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const TableCallerMainTableTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const TableCallerMainTable = styled.table`
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
  border-spacing: 2px;
  border-color: gray;
  font-variant: normal;
`;

export default DoubleOuterSelector;
