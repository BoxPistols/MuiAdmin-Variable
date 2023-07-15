// FilterForm.tsx
import React from "react";
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel } from "@mui/material";

type FilterFormProps = {
  title: string;
  setTitle: (value: string) => void;
  price: string;
  setPrice: (value: string) => void;
  stock: string;
  setStock: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  brand: string;
  setBrand: (value: string) => void;
  rating: string;
  setRating: (value: string) => void;
  active: boolean | undefined;
  setActive: (value: boolean | undefined) => void;
};

export const FilterForm: React.FC<FilterFormProps> = ({ title, setTitle, price, setPrice, stock, setStock, category, setCategory, brand, setBrand, rating, setRating, active, setActive }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <TextField label="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="ハイブリッド">ハイブリッド</MenuItem>
          <MenuItem value="バン">バン</MenuItem>
          <MenuItem value="セダン">セダン</MenuItem>
          <MenuItem value="SUV">SUV</MenuItem>
          <MenuItem value="クーペ">クーペ</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Brand</InputLabel>
        <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="トヨタ">トヨタ</MenuItem>
          <MenuItem value="日産">日産</MenuItem>
          <MenuItem value="ホンダ">ホンダ</MenuItem>
          <MenuItem value="マツダ">マツダ</MenuItem>
          <MenuItem value="スズキ">スズキ</MenuItem>
        </Select>
      </FormControl>
      <TextField label="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
      <FormControlLabel
        control={
          <Checkbox
            checked={active ?? false}
            onChange={(e) => setActive(e.target.checked)}
          />
        }
        label="Active"
      />
    </Box>
  );
};
