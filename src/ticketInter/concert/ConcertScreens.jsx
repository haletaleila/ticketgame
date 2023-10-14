import { useParams } from "react-router-dom";
import React from "react";
import ImageDisplayer from "../../common/component/image/ImageDisplayer";
import FetchJson from "../../common/component/json/FetchJson";
import { Container } from "./ConcertStyle";
import ConcertArea from "./component/ConcertArea";

function ConcertScreens() {
  const { region, venue, place } = useParams(); // 파람정보를 가져와서 어디로 시트 정보를 보여줄지 결정해보자.

  // json data 가져오기 - 로컬
  const jsonUrl = `/assets/concert/${region}/${venue}/${place}.json`;
  const { data, loading, error } = FetchJson({ url: jsonUrl });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Container>
        <ImageDisplayer
          region={region}
          venue={venue}
          place={place}
          usemap="#concert-map"
        />
        <map name="concert-map">
          {data.seatRanges.map((seatRanges) => (
            <ConcertArea
              coords={`${seatRanges.rect.x1},${seatRanges.rect.y1},
              ${seatRanges.rect.x2},${seatRanges.rect.y2}`}
              code={seatRanges.rangeId}
              shape={seatRanges.shape}
              seatNumber={seatRanges.seatNumber}
            />
          ))}
        </map>
      </Container>

      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default ConcertScreens;
