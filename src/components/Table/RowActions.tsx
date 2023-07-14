// RowActions.tsx
import React from "react";
import { IconButton } from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

type RowActionsProps = {
  actions: string[];
  onAction: (action: string) => void;
};

export const RowActions: React.FC<RowActionsProps> = ({ actions, onAction }) => {
  return (
    <>
      {actions.includes("detail") && (
        <IconButton onClick={() => onAction("detail")}>
          <Visibility />
        </IconButton>
      )}
      {actions.includes("edit") && (
        <IconButton onClick={() => onAction("edit")}>
          <Edit />
        </IconButton>
      )}
      {actions.includes("delete") && (
        <IconButton onClick={() => onAction("delete")}>
          <Delete />
        </IconButton>
      )}
    </>
  );
};
