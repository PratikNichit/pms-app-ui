import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";
const HomePage = () => {
  return (
    <Box
      sx={{
        background: "#f0f2f5", // Ensure the background color is correctly set
        height: "100vh", // Full height of the viewport
        width: "100vw", // Full width of the viewport
        margin: "-20px",
      }}
    >
      <Box sx={{ background: "#fff", margin: "10px", display: "inline-block" }}>
        <Typography variant="h2">Home Page</Typography>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["Previous year", "Current Year"] },
          ]}
          series={[{ data: [4, 5] }]}
          width={500}
          height={300}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
