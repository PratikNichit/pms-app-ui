import React from "react";
import { Typography, TextField, Container, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const KpiCard = ({ kpi, description, comments, rating, file, onDelete }) => {
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
  return (
    <Container
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        mt: 4,
      }}
    >
      <form action="#">
        <TextField
          variant="outlined"
          label="KPI"
          fullWidth
          required
          InputProps={{
            readOnly: true,
          }}
          defaultValue={kpi}
          sx={customeStyle.field}
        />
        <TextField
          variant="outlined"
          label="Description"
          fullWidth
          required
          multiline
          rows={2}
          InputProps={{
            readOnly: true,
          }}
          defaultValue={description}
        />
        <TextField
          variant="outlined"
          label="Comments"
          fullWidth
          required
          multiline
          rows={2}
          sx={customeStyle.field}
          InputProps={{
            readOnly: true,
          }}
          defaultValue={comments}
        />
        <TextField
          variant="outlined"
          label="Rating"
          fullWidth
          required
          sx={customeStyle.field}
          InputProps={{
            readOnly: true,
          }}
          defaultValue={rating}
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          endIcon={<DeleteIcon fontSize="small" />}
          sx={customeStyle.submitButton}
          onClick={() => onDelete(kpi)}
        >
          Delete
        </Button>
      </form>
      <Typography
        sx={{ m: 1 }}
        variant="body1"
        color="textSecondary"
        component="h1"
        gutterBottom
      >
        Attchments :
      </Typography>
      <Typography
        sx={{ m: 1 }}
        variant="body1"
        color="textSecondary"
        component="h1"
        gutterBottom
      >
        {file}
      </Typography>
    </Container>
  );
};

export default KpiCard;
