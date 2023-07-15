// GlobalSearch.tsx
import React from "react";
import { TextField } from "@mui/material";

type GlobalSearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ search, setSearch }) => {
  return (
    <TextField label="Global Search" value={search} onChange={(e) => setSearch(e.target.value)} />
  );
};
