import React, { createContext, useReducer } from "react";

import Timeline from "../models/Timeline";

const initialState = {
  timelines: [] as Timeline[],
};

type TimelinesActions =
  | {
      type: "TOGGLE_TIMELINE_HIDDEN";
      payload: { id: number };
    }
  | {
      type: "SET_TIMELINES";
      payload: { timelines: Timeline[] };
    };

const reducer = (state: typeof initialState, action: TimelinesActions) => {
  switch (action.type) {
    case "SET_TIMELINES": {
      return {
        ...state,
        timelines: action.payload.timelines,
      };
    }
    case "TOGGLE_TIMELINE_HIDDEN": {
      const updatedTimelines = state.timelines.map((timeline) =>
        timeline.id === action.payload.id
          ? { ...timeline, hidden: !timeline.hidden }
          : timeline
      );
      return {
        ...state,
        timelines: updatedTimelines,
      };
    }
    default:
      return state;
  }
};

const TimelinesContext = createContext<{
  timelinesState: typeof initialState;
  timelinesDispatch: React.Dispatch<TimelinesActions>;
}>({ timelinesState: initialState, timelinesDispatch: () => {} });

interface TimelinesContextProviderProps {
  children: React.ReactNode;
}
const TimelinesContextProvider = ({
  children,
}: TimelinesContextProviderProps) => {
  const [timelinesState, timelinesDispatch] = useReducer(reducer, initialState);

  return (
    <TimelinesContext.Provider value={{ timelinesState, timelinesDispatch }}>
      {children}
    </TimelinesContext.Provider>
  );
};

export { TimelinesContext, TimelinesContextProvider };
