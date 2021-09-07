import { useContext } from "react";
import styled from "@emotion/styled";

import { TimelinesContext } from "../App";
import TimelineControl from "./TimelineControl";

const TimelinesWrapper = styled.div`
  background-color: blanchedalmond;
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 85px;
  max-height: 250px;
  overflow: auto;
`;

const TimelineEmtpy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
`;

const TimelinesContainer = () => {
  const { timelines } = useContext(TimelinesContext);

  return (
    <TimelinesWrapper>
      {timelines?.length ? (
        timelines.map((timeline) => (
          <TimelineControl timeline={timeline} key={timeline.id} />
        ))
      ) : (
        <TimelineEmtpy>No timelines yet in this scenario</TimelineEmtpy>
      )}
    </TimelinesWrapper>
  );
};

export default TimelinesContainer;
