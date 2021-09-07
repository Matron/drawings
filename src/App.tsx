import { useContext, useEffect } from "react";
import styled from "@emotion/styled";

import TimelinesContainer from "./components/TimelinesContainer";
import { TimelinesContext } from "./contexts/TimelinesContext";

const Main = styled.div`
  background-color: #121212;
  height: 100vh;
`;

function App() {
  const { dispatch } = useContext(TimelinesContext);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: "SET_TIMELINES", payload: { timelines: data }})
        console.log("got data: ", data);
      });
  }, []);

  return (
    <Main>
        <TimelinesContainer />
    </Main>
  );
}

export default App;
