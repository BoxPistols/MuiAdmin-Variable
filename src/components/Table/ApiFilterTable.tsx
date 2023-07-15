// ApiFilterTable.tsx
import React, { useState, useEffect } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { Product, DynamicTable } from "./DynamicTable";
import { FilterForm } from "./FilterForm";
import { GlobalSearch } from "./GlobalSearch";
import { SortFilter } from "./SortFilter";

export const ApiFilterTable: React.FC = () => {

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [active, setActive] = useState<boolean | null>(null);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");


  useEffect(() => {
    setLoading(true);
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleClear = () => {
    setTitle("");
    setPrice("");
    setStock("");
    setCategory("");
    setBrand("");
    setRating("");
    setActive(null);
  };

  const filteredData = data.filter((item) => {
    if (title && !item.title.includes(title)) return false;
    if (price && !item.price.toString().includes(price)) return false;
    if (stock && !item.stock.toString().includes(stock)) return false;
    if (category && item.category !== category) return false;
    if (brand && item.brand !== brand) return false;
    if (rating && !item.rating.toString().includes(rating)) return false;
    // falseまたはnullの時は全データを表示する
    if (active !== null && active !== false && item.active !== active) return false;

    return true;
  });


  return (
    <>
      <GlobalSearch search={search} setSearch={setSearch} />
      <SortFilter sortField={sortField} setSortField={setSortField} sortDirection={sortDirection} setSortDirection={setSortDirection} />
      <FilterForm title={title} setTitle={setTitle} price={price} setPrice={setPrice} stock={stock} setStock={setStock} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} rating={rating} setRating={setRating}
        active={active}
        setActive={setActive}
      />
      <Button onClick={handleClear}>All Clear</Button>
      <DynamicTable rows={filteredData} setData={setData} />
    </>
  );
};
