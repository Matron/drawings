import { useCallback, useEffect, useState } from "react";

// Hook
export default function useKeyPress(targetKey: string) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  // If pressed key is our target key then set to true
  const downHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      console.log("down handler ", key);

      if (key === targetKey) {
        setKeyPressed(true);
      }
    },
    [targetKey]
  );

  // If released key is our target key then set to false
  const upHandler = useCallback(
    ({ key }: KeyboardEvent) => {
      console.log("up handler ", key);
      if (key === targetKey) {
        setKeyPressed(false);
      }
    },
    [targetKey]
  );

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      console.log("cleaning");

      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
