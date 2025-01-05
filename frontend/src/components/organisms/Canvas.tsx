import React, { useState, useRef, useContext } from "react";
import { Stage, Layer } from "react-konva";
import { DrawingContext } from "../../contexts/DrawingContext/drawingContext";
import Shape from "../molecules/shape/Shape";

function Canvas() {
  const [tool] = useContext(DrawingContext);

  const [shapes, setShapes] = useState([]);

  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    startPos.current = pos;

    setLines([...lines, { tool, points: [pos.x, pos.y] }]);

    if (tool === "pen") {
      setShapes([...shapes, { tool, points: [pos.x, pos.y] }]);
    } else if (tool === "rectangle") {
      setShapes([...shapes, { tool, x: pos.x, y: pos.y, width: 0, height: 0 }]);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const lastShape = shapes[shapes.length - 1];

    if (tool === "pen") {
      lastShape.points = lastShape.points.concat([point.x, point.y]);
    } else if (tool === "rectangle") {
      lastShape.width = point.x - startPos.current.x;
      lastShape.height = point.y - startPos.current.y;
    }

    shapes.splice(shapes.length - 1, 1, lastShape);
    setShapes(shapes.concat());

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
        {shapes.map((shape, idx) => {
          return <Shape key={idx} shape={shape} />;
        })}
      </Layer>
    </Stage>
  );
}

export default Canvas;
