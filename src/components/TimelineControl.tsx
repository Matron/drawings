import styled from "@emotion/styled";

import Timeline from "../models/Timeline";
import EventControl from "./EventControl";

const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 85px;
  width: 100%;
  border: 1px blueviolet solid;
  color: blueviolet;
`;

const TimelineName = styled.div`
  background-color: thistle;
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const TimelineEvents = styled.div`
  background-color: darkgray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TimelineToggle = styled.div`
  background-color: cornflowerblue;
  width: 85px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface TimelinesProps {
  timeline: Timeline;
  handleToggleTimelineHidden: (id: number) => void;
}

const TimelineControl = ({
  timeline,
  handleToggleTimelineHidden,
}: TimelinesProps) => {
  const { name, events, hidden } = timeline;

  return (
    <TimelineWrapper>
      <TimelineName>{name}</TimelineName>
      <TimelineEvents>
        {events &&
          events.map((event) => <EventControl event={event} key={event.id} />)}
      </TimelineEvents>
      <TimelineToggle onClick={() => handleToggleTimelineHidden(timeline.id)}>
        {hidden ? "Show" : "Hide"}
      </TimelineToggle>
    </TimelineWrapper>
  );
};

export default TimelineControl;
