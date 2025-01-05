import LineAtom from "../../atoms/line/LineAtom";
import RectAtom from "../../atoms/rect/RectAtom";

const Shape = ({ shape }) => {
  if (shape.tool === "pen") {
    return <LineAtom points={shape.points} tool={shape.tool} />;
  } else if (shape.tool === "rectangle") {
    return (
      <RectAtom
        x={shape.x}
        y={shape.y}
        width={shape.width}
        height={shape.height}
      />
    );
  }
  return null;
};

export default Shape;
