import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import TimelinesContainer from "./components/TimelinesContainer";
import Timeline from "./models/Timeline";

export const TimelinesContext = React.createContext<{ timelines: Timeline[] | null }>({ timelines: [] });
TimelinesContext.displayName = "TimelinesContext";

const Main = styled.div`
  background-color: #121212;
  height: 100vh;
`;

function App() {
  const [data, setData] = useState<Timeline[] | null>([]);

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log("got data: ", data);
      });
  }, []);

  return (
    <Main>
      <TimelinesContext.Provider
        value={{
          timelines: data,
        }}
      >
        <TimelinesContainer />
      </TimelinesContext.Provider>
    </Main>
  );
}

export default App;
