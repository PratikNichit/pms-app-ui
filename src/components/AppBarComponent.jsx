import React from "react";
import { IconButton, Typography, Box, AppBar, Toolbar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const AppBarComponent = () => {
  return (
    <AppBar
      sx={{
        width: `calc(100% - ${240}px)`,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
      elevation={1}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <AccountCircle sx={{ fontSize: 35 }} />
          </IconButton>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption" sx={{ mb: -0.5 }}>
              Employee
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Pratik
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
