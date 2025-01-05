import React from "react";
import DrawingToolBar from "../molecules/DrawingToolBar";
import Canvas from "../organisms/Canvas";

import MenuOutlined from "@mui/icons-material/MenuOutlined";
import IconButtonWithTooltip from "../atoms/buttoms/IconButtonWithTooltip";
import { Box } from "@mui/material";

function DrawingTemplate() {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "0%",
          width: "40px",
          zIndex: "2",
          padding: "8px",
        }}
      >
        <IconButtonWithTooltip title="menu" onclick={() => {}}>
          <MenuOutlined />
        </IconButtonWithTooltip>
      </Box>
      <div
        style={{ width: "30%", position: "absolute", left: "35%", zIndex: "2" }}
      >
        <DrawingToolBar />
      </div>

      <Canvas />
    </>
  );
}

export default DrawingTemplate;
