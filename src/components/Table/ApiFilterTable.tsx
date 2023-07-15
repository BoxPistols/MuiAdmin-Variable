// ApiFilterTable.tsx
import React, { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Product, DynamicTable } from "./DynamicTable";
import { FilterForm } from "./FilterForm";

export const ApiFilterTable: React.FC = () => {

  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [rating, setRating] = useState("");
  const [active, setActive] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    fetch("/data/products.json")
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

  const filteredData = data.filter((item) => {
    if (title && !item.title.includes(title)) return false;
    if (price && !item.price.toString().includes(price)) return false;
    if (stock && !item.stock.toString().includes(stock)) return false;
    if (category && item.category !== category) return false;
    if (brand && item.brand !== brand) return false;
    if (rating && !item.rating.toString().includes(rating)) return false;
    if (active !== undefined && item.active !== active) return false;

    return true;
  });

  return (
    <>
      <FilterForm title={title} setTitle={setTitle} price={price} setPrice={setPrice} stock={stock} setStock={setStock} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} rating={rating} setRating={setRating} active={active} setActive={setActive} />
      <DynamicTable rows={filteredData} setData={setData} />
    </>
  );
};
