/* const MyComponent = () => {
    const ref = useRef(null);
    useEffect(() => {
      console.log('width', ref.current ? ref.current.offsetWidth : 0);
    }, [ref.current]);
    return <div ref={ref}>Hello</div>;
  };
 */

import React from "react";

export const getElementWidth = (
  ref: React.RefObject<HTMLDivElement>
): number => {
  console.log(
    `The element ${ref} width is: ${ref.current ? ref.current.offsetWidth : 0}`
  );
  return ref.current ? ref.current.offsetWidth : 0;
};
