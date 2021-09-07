import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { TimelinesContextProvider } from "./contexts/TimelinesContext";

ReactDOM.render(
  <React.StrictMode>
    <TimelinesContextProvider>
      <App />
    </TimelinesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
