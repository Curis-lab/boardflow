import React, { useState, useRef, useContext } from "react";
import { Stage, Layer} from "react-konva";
import { DrawingContext } from "../../contexts/DrawingContext/drawingContext";
import LineAtom from "../atoms/line/LineAtom";


function Canvas() {
  const [tool] = useContext(DrawingContext);

  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  
  return (
    <Stage
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Layer>
        {lines.map((line, idx) => (
          <LineAtom key={idx} points={line.points} tool={line.tool} />
        ))}
      </Layer>
    </Stage>
  );
}

export default Canvas;
