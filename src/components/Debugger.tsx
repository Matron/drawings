import React from "react";

interface DebuggerProps {
  text: string;
}

const Debugger = ({ text }: DebuggerProps) => {
  return (
    <div>
      <h3 style={{ color: "white", margin: 0 }}>{text}</h3>
    </div>
  );
};

export default Debugger;
