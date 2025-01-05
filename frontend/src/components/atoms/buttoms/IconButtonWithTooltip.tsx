import { IconButton, Tooltip } from "@mui/material";
import React from "react";

interface IconButtonWithTooltipProps {
  title: string;
  children: React.ReactNode;
  onclick: () => void;
}

function IconButtonWithTooltip({
  title,
  children,
  onclick,
}: IconButtonWithTooltipProps) {
  return (
    <Tooltip title={title} onClick={onclick}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
}

export default IconButtonWithTooltip;
