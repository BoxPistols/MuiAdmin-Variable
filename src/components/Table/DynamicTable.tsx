// DynamicTable.tsx
import React from "react";
import { Table, TableBody, TableContainer, TableHead, Paper, TableRow } from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./StyledComponents";
import { RowActions } from "./RowActions";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  active: boolean;
};

interface DynamicTableProps {
  rows: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
}


export const DynamicTable: React.FC<DynamicTableProps> = ({ rows, setData }) => {

  // Action Cell
  const handleAction = (action: string, row: Product) => {
    switch (action) {
      case "detail":
        alert(`${row.title} の詳細です \n ${JSON.stringify(row)}`);
        break;
      case "edit":
        // TODO: Implement edit action.
        alert(`${row.title} を開き編集します \n 編集ページ \n ${row.id}`);
        break;
      case "delete":
        if (window.confirm(`${row.title} を消去してもよろしいですか?`)) {
          setData(rows.filter((item) => item.id !== row.id));
          alert(`${row.title} を消去しました`);
        } else {
          alert(`${row.title} を消去しませんでした`);
        }
        break;
      default:
        break;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
            <StyledTableCell align="right">Active</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.title}
                </StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.stock}</StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">{row.brand}</StyledTableCell>
                <StyledTableCell align="right">{row.rating}</StyledTableCell>
                <StyledTableCell align="right">{row.active ? "Yes" : "No"}</StyledTableCell>
                <StyledTableCell align="right">
                  <RowActions actions={["detail", "edit", "delete"]} onAction={(action) => handleAction(action, row)} />
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell align="center" colSpan={8} sx={{ padding: 8 }}>No data</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

