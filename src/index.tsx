import * as React from "react";
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./components/theme";
import Header from "./components/Header";
import { Button, CssBaseline } from "@mui/material";
import "./style.css";


const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(
    
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <Button variant="contained">Hello World</Button>
        
        <Header />
      </StyledEngineProvider>
    </ThemeProvider>
  </> 
  )
}
