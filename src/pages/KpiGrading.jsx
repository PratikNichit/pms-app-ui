import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  FormControl,
  Box,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import "./KpiGrading.css";
import KpiCard from "../components/KpiCard"; // assuming KpiCard is correctly defined

const initialKpis = [
  {
    kpi: "KPI 1",
    description: "Description 1",
    comments: "Comments 1",
    rating: "Very Good",
    file: "file1.pdf",
  },
  {
    kpi: "KPI 2",
    description: "Description 2",
    comments: "Comments 2",
    rating: "Outstanding",
    file: "file2.pdf",
  },
];

const KpiGrading = () => {
  const customStyle = {
    field: {
      marginTop: "20px",
      marginBottom: "10px",
      display: "block",
    },
    submitButton: {
      marginTop: "10px",
    },
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const [kpi, setKpi] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState("");
  const [file, setFile] = useState(null);
  const [kpiList, setKpiList] = useState(initialKpis);

  // Handle adding a new KPI to the list
  const handleAddKpi = () => {
    const newKpi = {
      kpi,
      description,
      comments,
      rating,
      file: file ? file.name : "No file selected", // store the file name
    };
    setKpiList([...kpiList, newKpi]); // update the list with the new KPI
    // Clear the input fields
    setKpi("");
    setDescription("");
    setComments("");
    setRating("");
    setFile(null);
  };

  // Handle deleting a KPI from the list
  const handleDelete = (deleteKpi) => {
    const updatedList = kpiList.filter((kpiItem) => kpiItem.kpi !== deleteKpi);
    setKpiList(updatedList);
  };

  return (
    <Container
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        mt: 4,
      }}
    >
      <Typography
        variant="h5"
        color="textSecondary"
        component="h1"
        gutterBottom
      >
        KPI Grading
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          variant="outlined"
          label="KPI"
          fullWidth
          required
          sx={customStyle.field}
          value={kpi}
          onChange={(event) => setKpi(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Description"
          fullWidth
          required
          multiline
          rows={2}
          sx={customStyle.field}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          variant="outlined"
          label="Comments"
          fullWidth
          required
          multiline
          rows={2}
          sx={customStyle.field}
          value={comments}
          onChange={(event) => setComments(event.target.value)}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <Typography
            variant="body1"
            component="span"
            sx={{ mt: 1 }}
            gutterBottom
          >
            Choose File
          </Typography>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 1 }}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => setFile(event.target.files[0])} // single file
            />
          </Button>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {file ? file.name : "No file selected"}
          </Typography>
        </Box>
        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <InputLabel id="rating-label">Rating</InputLabel>
          <Select
            labelId="rating-label"
            id="rating-select"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            label="Rating"
          >
            <MenuItem value="Improvement Needed">Improvement Needed</MenuItem>
            <MenuItem value="Satisfactory">Satisfactory</MenuItem>
            <MenuItem value="Very Good">Very Good</MenuItem>
            <MenuItem value="Outstanding">Outstanding</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="button"
          variant="contained"
          color="primary"
          endIcon={<AddIcon fontSize="small" />}
          sx={customStyle.submitButton}
          onClick={handleAddKpi}
        >
          Add KPI
        </Button>
      </form>

      <Container sx={{ mt: 3 }}>
        <ul>
          {kpiList.map((kpiItem, index) => (
            <li key={index}>
              <KpiCard
                kpi={kpiItem.kpi}
                description={kpiItem.description}
                comments={kpiItem.comments}
                rating={kpiItem.rating}
                file={kpiItem.file}
                onDelete={() => handleDelete(kpiItem.kpi)} // passing the delete function
              />
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  );
};

export default KpiGrading;
