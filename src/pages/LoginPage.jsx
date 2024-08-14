import { Grid } from "@mui/material";
import React from "react";
import "./LoginPage.css";
import LoginCard from "./../components/LoginCard";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="background" />
      <div className="overlay">
        <Grid container spacing={2} style={{ height: "100%", marginTop: -30 }}>
          <Grid item md={8}></Grid>
          <Grid item md={4} style={{ height: "100%" }}>
            <LoginCard />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
