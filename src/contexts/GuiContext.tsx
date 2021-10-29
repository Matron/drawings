import React, { createContext, useReducer } from "react";

export enum ModalEnum {
  NONE,
  TIMELINE_DETAILS,
  EVENT_DETAILS,
}

const initialState = {
  // keysPressed: [] as string[],
  openModal: ModalEnum.NONE,
  screenOffset: 1,
  screenScale: 1,
};

type GuiActions =
  | {
      type: "SHOW_MODAL";
      payload: { modal: ModalEnum };
    }
  | {
      type: "SET_SCREEN_SCALE";
      payload: { screenScale: number };
    }
  | {
      type: "SET_SCREEN_OFFSET";
      payload: { screenOffset: number };
    };

const reducer = (guiState: typeof initialState, action: GuiActions) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      return {
        ...guiState,
        openModal: action.payload.modal,
      };
    }
    case "SET_SCREEN_SCALE": {
      return {
        ...guiState,
        screenScale: action.payload.screenScale,
      };
    }
    case "SET_SCREEN_OFFSET": {
      console.log(
        "screen offset ",
        guiState.screenOffset + action.payload.screenOffset
      );
      return {
        ...guiState,
        screenOffset: guiState.screenOffset + action.payload.screenOffset,
      };
    }
    default:
      return guiState;
  }
};

const GuiContext = createContext<{
  guiState: typeof initialState;
  guiDispatch: React.Dispatch<GuiActions>;
}>({ guiState: initialState, guiDispatch: () => {} });

interface GuiContextProviderProps {
  children: React.ReactNode;
}
const GuiContextProvider = ({ children }: GuiContextProviderProps) => {
  const [guiState, guiDispatch] = useReducer(reducer, initialState);

  return (
    <GuiContext.Provider value={{ guiState, guiDispatch }}>
      {children}
    </GuiContext.Provider>
  );
};

export { GuiContext, GuiContextProvider };
