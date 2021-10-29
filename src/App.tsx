import { useContext, useEffect } from "react";
import styled from "@emotion/styled";

import Debugger from "./components/Debugger";
import TimelinesContainer from "./components/TimelinesContainer";
import { TimelinesContext } from "./contexts/TimelinesContext";
import { GuiContext } from "./contexts/GuiContext";

const Main = styled.div`
  background-color: #121212;
  height: 100vh;
`;

function App() {
  const { timelinesDispatch } = useContext(TimelinesContext);
  const { guiState } = useContext(GuiContext);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        timelinesDispatch({
          type: "SET_TIMELINES",
          payload: { timelines: data },
        });
        console.log("got data: ", data);
      });
  }, [timelinesDispatch]);

  return (
    <Main>
      <Debugger text={"scale: " + guiState.screenScale} />
      <Debugger text={"offset: " + guiState.screenOffset} />
      <TimelinesContainer />
    </Main>
  );
}

export default App;
