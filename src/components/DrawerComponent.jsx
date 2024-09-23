import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import logo from "../assets/images/trackify-white.png";
import { useLocation } from "react-router-dom";

const DrawerComponent = ({ menuItems, onNavigate }) => {
  const location = useLocation();
  const drawerWidth = 240;
  const customStyle = {
    drawer: {
      width: drawerWidth,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundColor: "#061e33",
        color: "#fff",
      },
    },
    active: {
      background: "#0f4a7f",
    },
  };
  return (
    <Box>
      <Drawer sx={customStyle.drawer} variant="permanent" anchor="left">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logo}
            alt=""
            style={{
              height: "60px",
              width: "100px",
              objectFit: "contain",
              alignSelf: "center",
              justifySelf: "center",
            }}
          />
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              onClick={() => onNavigate(item.path)}
              key={item.text}
              sx={location.pathname === item.path ? customStyle.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
