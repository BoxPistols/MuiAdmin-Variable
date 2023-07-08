import * as React from 'react'
import { Box, Toolbar, Typography, IconButton } from '@mui/material'

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import { AppBar } from './util'
import { SideNav } from './SideNav'
import { theme } from './theme'

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="toggle drawer"
            // onClick={open ? handleDrawerClose : handleDrawerOpen}
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2.5,
              ml: -1.75,
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={theme.palette.primary.contrastText}
          >
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNav open={open} />
    </Box>
  )
}
