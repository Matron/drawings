import { useContext, useEffect, useState, useRef, useCallback } from "react";
import styled from "@emotion/styled";

import { GuiContext } from "../contexts/GuiContext";
import { TimelinesContext } from "../contexts/TimelinesContext";
import useKeyPress from "../hooks/useKeyPress";
// import { MouseActions, useMouse } from "../hooks/useMouse";
import TimelineControl from "./TimelineControl";
import { MouseActions, useMouse } from "../hooks/useMouse";

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
  const { timelinesState, timelinesDispatch } = useContext(TimelinesContext);
  const { guiDispatch } = useContext(GuiContext);
  // const { screenOffset, screenScale } = guiState;
  const isShiftPressed = useKeyPress("Shift");
  const isApressed = useKeyPress("a");
  const isDpressed = useKeyPress("d");
  const isWpressed = useKeyPress("W");
  const isSpressed = useKeyPress("S");

  const timelinesRef = useRef<HTMLDivElement>(null);

  const onMouseWheel = useMouse(MouseActions.WHEEL, timelinesRef);

  useEffect(() => {
    if (isApressed) {
      console.log("A pressed");
      guiDispatch({
        type: "SET_SCREEN_OFFSET",
        payload: { screenOffset: 1 },
      });
    }
    if (isDpressed) {
      console.log("D pressed");
      guiDispatch({
        type: "SET_SCREEN_OFFSET",
        payload: { screenOffset: -1 },
      });
    }
  }, [isApressed, isDpressed, guiDispatch]);

  /*   const onRightArrow = () => {
    console.log("OnRightArrow");
    guiDispatch({
      type: "SET_SCREEN_OFFSET",
      payload: { screenOffset: 10 },
    });
  };

  const onLefttArrow = () => {
    console.log("OnLeftArrow");
    guiDispatch({
      type: "SET_SCREEN_OFFSET",
      payload: { screenOffset: -10 },
    });
  };

  useKeyPress("ArrowRight", onRightArrow);
  useKeyPress("ArrowLeft", onLefttArrow); */

  /* const handleZoom = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isShiftPressed) {
      e.preventDefault();
      let newScale = screenScale;
      const delta = e.deltaY * 0.02;
      newScale = newScale + delta;

      console.log("mouse wheel: ", newScale);
      console.log("screen offset: ", screenOffset);

      guiDispatch({
        type: "SET_SCREEN_SCALE",
        payload: { screenScale: newScale },
      });
      guiDispatch({
        type: "SET_SCREEN_OFFSET",
        payload: { screenOffset: screenOffset + e.deltaY * 10 },
      });
    }
  }; */

  /* useEffect(() => {
    if (isRightArrowPressed) {
      console.log("RIGHT ARROW");
      guiDispatch({
        type: "SET_SCREEN_OFFSET",
        payload: { screenOffset: 1 },
      });
    }
    if (isLeftArrowPressed) {
      console.log("LEFT ARROW");
      guiDispatch({
        type: "SET_SCREEN_OFFSET",
        payload: { screenOffset: -1 },
      });
    }
  }, [isRightArrowPressed, isLeftArrowPressed, guiDispatch]); */

  /* const wheelHandler = useCallback(
    (e) => {
      if (isShiftPressed) {
        e.preventDefault();
        let newScale = screenScale + e.deltaY * 0.01;
        if (newScale > 0.2) {
          guiDispatch({
            type: "SET_SCREEN_OFFSET",
            payload: { screenOffset: e.deltaY * 5 },
          });
          console.log("dispatch ", e.deltaY);
          guiDispatch({
            type: "SET_SCREEN_SCALE",
            payload: { screenScale: Math.round(newScale * 100) / 100 },
          });
        }
      }
    },
    [guiDispatch, isShiftPressed, screenScale]
  ); */

  /* useEffect(() => {
    const ref = timelinesRef?.current;
    console.log("use effect");

    if (ref)
      ref.addEventListener("wheel", wheelHandler, {
        passive: false,
      });

    return () => {
      ref?.removeEventListener("wheel", wheelHandler);
    };
  }, [wheelHandler]); */

  const toggleTimelineHidden = (id: number) => {
    timelinesDispatch({ type: "TOGGLE_TIMELINE_HIDDEN", payload: { id: id } });
  };

  // onWheel={(e) => handleZoom(e)}

  return (
    <TimelinesWrapper ref={timelinesRef}>
      {timelinesState.timelines?.length ? (
        timelinesState.timelines.map((timeline) => (
          <TimelineControl
            timeline={timeline}
            handleToggleTimelineHidden={toggleTimelineHidden}
            key={timeline.id}
          />
        ))
      ) : (
        <TimelineEmtpy>No timelines yet in this scenario</TimelineEmtpy>
      )}
    </TimelinesWrapper>
  );
};

export default TimelinesContainer;
