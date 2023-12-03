import React, { useContext } from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../Context/mouse-context";

const DotRing = ({className: ClassName}) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className={`ring ${cursorType} ${ClassName}`}
      ></div>
      <div
        className={`dot ${cursorType} ${ClassName}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;
