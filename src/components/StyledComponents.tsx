// StyledComponents.tsx
import { styled } from "@mui/material/styles";
import { TableCell, TableRow } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    "&[variant='head']": {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    "&[variant='body']": {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
