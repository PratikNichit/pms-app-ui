import React from "react";
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
const KpiGrading = () => {
  const customeStyle = {
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

  return (
    <Container>
      <Typography
        variant="h5"
        color="textSecondary"
        component="h1"
        gutterBottom
      >
        Kpi Grading
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          variant="outlined"
          label="KPI"
          fullWidth
          required
          sx={customeStyle.field}
        />
        <TextField
          variant="outlined"
          label="Description"
          fullWidth
          required
          multiline
          rows={2}
          sx={customeStyle.field}
        />
        <TextField
          variant="outlined"
          label="Comments"
          fullWidth
          required
          multiline
          rows={2}
          sx={customeStyle.field}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <Typography
            variant="body1"
            color="textSecondary"
            component="h1"
            sx={{ mt: 1 }}
            gutterBottom
          >
            Choice File
          </Typography>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 1 }}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Box>
        <FormControl fullWidth sx={{ mt: 2, mb: 2 }}>
          <InputLabel id="demo-simple-select-label">Rating </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>

        <Button
          type="button"
          variant="contained"
          color="primary"
          endIcon={<AddIcon fontSize="small" />}
          sx={customeStyle.submitButton}
          onClick={(event) => console.log(event + "hello")}
        >
          Add KPI
        </Button>
      </form>
    </Container>
  );
};

export default KpiGrading;
