import { useContext, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

import Event from "../models/Event";
import { getElementWidth } from "../utils/DOMFunctions";
import { GuiContext } from "../contexts/GuiContext";

interface EventControlProps {
  event: Event;
  heightInPixels?: number;
  offset?: number;
}

function EventControl({
  event,
  heightInPixels = 80,
  offset = 0,
}: EventControlProps) {
  const { name, children, endDate, startDate } = event;

  const { guiState } = useContext(GuiContext);
  const { screenScale } = guiState;

  const [elementWidth, setElementWidth] = useState("10px");
  const [elementHeight, setElementHeight] = useState("10px");
  const [elementPosX, setElementPosX] = useState(10);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setElementHeight(heightInPixels + "px");
  }, [heightInPixels]);

  useEffect(() => {
    const width = (endDate.year - startDate.year) * screenScale;
    setElementPosX(startDate.year * screenScale - offset);
    setElementWidth(width + "px");
  }, [endDate.year, startDate.year, offset, screenScale]);

  return (
    <EventCard
      style={{
        width: elementWidth,
        height: elementHeight,
        left: elementPosX,
      }}
      ref={cardRef}
      onClick={(e) => {
        getElementWidth(cardRef);
        e.stopPropagation();
      }}
    >
      <div style={{ alignSelf: "start" }}>{name}</div>
      {children &&
        children.map((child) => (
          <EventControl
            event={child}
            heightInPixels={heightInPixels - 10}
            offset={elementPosX + offset}
            key={child.id}
          />
        ))}
    </EventCard>
  );
}

const EventCard = styled.div`
  background-color: dimgray;
  color: floralwhite;
  cursor: pointer;
  border-radius: 5px;
  line-height: 30px;
  padding: 0 5px;
  position: absolute;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: small;
  border: 1px solid;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
`;

export default EventControl;
