import React, { useState } from "react";
import { DrawingContext } from "../../contexts/DrawingContext/drawingContext";
interface drawingProviderProps {
  children: React.ReactNode;
}

function DrawingProvider({ children }: drawingProviderProps) {
  const [tool, setTool] = useState("pen");
  return (
    <DrawingContext.Provider value={[tool, setTool]}>
      {children}
    </DrawingContext.Provider>
  );
}

export default DrawingProvider;
