import React from "react";
import { Line } from "react-konva";

function LineAtom({ points, tool }) {
  return (
    <Line
      points={points}
      stroke="#df4b26"
      strokeWidth={10}
      tension={0.5}
      lineCap="round"
      lineJoin="round"
      globalCompositeOperation={
        tool === "eraser" ? "destination-out" : "source-over"
      }
    />
  );
}

export default LineAtom;
