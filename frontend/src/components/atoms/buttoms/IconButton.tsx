import React from "react";
import { IconButton as MUUIIconButton } from "@mui/material";

interface IconButtonProps {
  arialLabel: string;
  children: React.ReactNode;
}

const IconButton = ({ arialLabel, children }: IconButtonProps) => (
  <MUUIIconButton aria-label={arialLabel}>{children}</MUUIIconButton>
);

export default IconButton;
