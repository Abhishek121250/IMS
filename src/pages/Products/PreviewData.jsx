import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CreateProduct from "../../assets/svg/CreateProduct.svg";
import CustomTextField from "../../components/Error/Reusable/CustomTextField";
import ClearIcon from "@mui/icons-material/Clear";
import CreateProductDialog from "./CreateProducDialog";
const PreviewData = ({ goToPreviousTab, goToNextTab }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCreateProduct = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Button
              sx={{
                width: "100%",
                background: "#DF2B87",
                color: "white",
                ":hover": {
                  background: "#DF2B87",
                },
                padding: "0.6rem 1.5rem",
                textTransform: "none",
              }}
              onClick={goToPreviousTab}
            >
              <Typography>Previous Step</Typography>
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Button
              sx={{
                width: "100%",
                background: "#DF2B87",
                color: "white",
                ":hover": {
                  background: "#DF2B87",
                },
                padding: "0.6rem 1.5rem",
                textTransform: "none",
              }}
              onClick={handleCreateProduct}
            >
              <Typography>Create Product</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <CreateProductDialog open={openDialog} handleClose={handleCloseDialog} />
    </>
  );
};

export default PreviewData;
