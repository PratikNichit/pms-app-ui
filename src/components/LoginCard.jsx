import React, { useState } from "react";
import logo from "../assets/images/trackify-white.png";
import "./LoginCard.css";
import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const handleSubmit = () => {
    console.log(email, password);
    navigate("/");
  };

  return (
    <div className="card">
      <div className="content">
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="cardContent">
          <Typography
            variant="h5"
            color="white"
            sx={{ fontWeight: "bold", margin: "15px", marginBottom: "5vh" }}
          >
            Login
          </Typography>
          <TextField
            label="Email Id"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
            InputProps={{
              style: {
                color: "white",
              },
            }}
            sx={{
              mb: 5,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white",
              },
            }}
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={(event) => setpassword(event.target.value)}
            fullWidth
            type="password"
            InputProps={{
              style: {
                color: "white",
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Set the border color to white
                },
                "&:hover fieldset": {
                  borderColor: "white", // Set the border color to white on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white", // Set the border color to white when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "white", // Set the label color to white
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white", // Set the label color to white when focused
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ margin: "50px" }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
