// SortFilter.tsx
import React from "react";
import { Button } from "@mui/material";

type SortFilterProps = {
  sortField: string;
  setSortField: (value: string) => void;
  sortDirection: "asc" | "desc";
  setSortDirection: (value: "asc" | "desc") => void;
};

export const SortFilter: React.FC<SortFilterProps> = ({ sortField, sortDirection, setSortDirection }) => {
  const toggleSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };

  return (
    <Button onClick={toggleSortDirection}>
      Sort by {sortField}: {sortDirection.toUpperCase()}
    </Button>
  );
};
