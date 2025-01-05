import React from "react";
import { Rect } from "react-konva";

function RectAtom({ x, y, width, height }) {
  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      stroke="#df4b26"
      strokeWidth={2}
      fill="transparent"
    />
  );
}

export default RectAtom;
