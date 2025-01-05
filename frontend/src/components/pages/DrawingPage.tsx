import React from "react";
import DrawingTemplate from "../templates/DrawingTemplate";
import DrawingProvider from "../../providers/DrawingProvider/DrawingProvider";

function DrawingPage() {
  return (
    <DrawingProvider>
      <DrawingTemplate />
    </DrawingProvider>
  );
}

export default DrawingPage;
