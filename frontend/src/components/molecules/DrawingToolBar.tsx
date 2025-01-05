import React, { useContext } from "react";
import { Box } from "@mui/material";
import IconButtonWithTooltip from "../atoms/buttoms/IconButtonWithTooltip";
import { DrawingContext } from "../../contexts/DrawingContext/drawingContext";

import Crop32Icon from "@mui/icons-material/Crop32";
import Block from "@mui/icons-material/Block";
import ModeSharpIcon from "@mui/icons-material/ModeSharp";

const drawingTools = [
  {
    title: "Pointer",
    icons: <ModeSharpIcon />,
    name: "pen",
  },
  {
    title: "Rectangle",
    icons: <Crop32Icon />,
    name: "rectangle",
  },
  {
    title: "Eraser",
    icons: <Block />,
    name: "eraser",
  },
];

export default function DrawingToolBar() {
  const [, setTool] = useContext(DrawingContext);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "2.5px 5px",
        backgroundColor: "#fff",
        gap: "10px",
        margin: "5px",
      }}
    >
      {drawingTools.map((t, idx) => (
        <IconButtonWithTooltip
          key={idx}
          title={t.title}
          onclick={() => setTool(`${t.name}`)}
        >
          {t.icons}
        </IconButtonWithTooltip>
      ))}
    </Box>
  );
}
