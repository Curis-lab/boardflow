import LineAtom from "../../atoms/line/LineAtom";
import RectAtom from "../../atoms/rect/RectAtom";

type rectangle = {
  startPos: { x: number; y: number };
  shape: { width: number; height: number };
};
type line = {
  points: number[];
  tool: string;
};
const Shape = ({ shape }: rectangle | line) => {
  if (shape.tool === "rectangle") {
    
    return (
      <RectAtom
        x={shape.startPos.x}
        y={shape.startPos.y}
        width={shape.width}
        height={shape.height}
      />
    );
  } else {
    return <LineAtom points={shape.points} tool={shape.tool} />;
  }
};

export default Shape;
