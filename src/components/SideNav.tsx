import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";

import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon
} from "@mui/icons-material";
import { MockText, Drawer, DrawerHeader } from "./util";

type SideNavProps = {
  open: boolean;
};

export const SideNav = ({ open }: SideNavProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts", "Setting"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 0,
                      ml: 0.5
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      ml: 1,
                      opacity: open ? 1 : 0
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <MockText />
        <MockText />
      </Box>
    </Box>
  );
}
