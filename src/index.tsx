import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { TimelinesContextProvider } from "./contexts/TimelinesContext";
import { GuiContextProvider } from "./contexts/GuiContext";

/* document.body.addEventListener("keydown", (e) => {
    console.log("keydown: " + e.key);
    //handleKeyPress(e.key);
    guiDispatch({ type: "SET_KEYS_PRESSED", payload: { keys: [e.key] } });
  });

  document.body.addEventListener("keyup", (e) => {
    console.log("keyup: " + e.key);
    //handleKeyPress(e.key);
    guiDispatch({ type: "SET_KEYS_PRESSED", payload: { keys: [] } });
  });

  return () => {
    document.body.removeEventListener("keydown", (e) => {
      console.log("remove event listener");
    });
  };
 */

ReactDOM.render(
  <React.StrictMode>
    <GuiContextProvider>
      <TimelinesContextProvider>
        <App />
      </TimelinesContextProvider>
    </GuiContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
