import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GradingIcon from "@mui/icons-material/Grading";
import DrawerComponent from "../DrawerComponent";
import AppBarComponent from "../AppBarComponent";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const menuItems = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardIcon color="primary" />,
    },
    {
      text: "KPI Review",
      path: "/KpiGrading",
      icon: <GradingIcon color="primary" />,
    },
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBarComponent />
        <DrawerComponent
          menuItems={menuItems}
          onNavigate={navigate}
        ></DrawerComponent>
        <Box
          sx={{
            background: "#f9f9f9",
            width: `calc(100% - ${drawerWidth}px)`,
            padding: "20px",
            marginTop: "64px",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;
