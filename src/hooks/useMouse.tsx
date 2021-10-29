import { useEffect, useState } from "react";

export enum MouseActions {
  WHEEL,
  MOVE,
  DRAG,
  LEFT_CLICK,
}

export function useMouse(
  action: MouseActions,
  elementRef: React.RefObject<HTMLDivElement>
) {
  const [mouseWheel, setMouseWheel] = useState(0);

  const wheelHandler = (e: Event) => {
    console.log("mouse event: ", e);
    //setMouseWheel(e.target)
  };

  useEffect(() => {
    const ref = elementRef?.current;

    window.addEventListener("onwheel", (e) => wheelHandler(e), {
      passive: false,
    });

    return () => {
      window.removeEventListener("onwheel", (e) => wheelHandler(e));
    };
  }, [elementRef]);

  return mouseWheel;
}
