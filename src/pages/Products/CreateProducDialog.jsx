// CreateProductDialog.jsx

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CustomTextField from "../../components/Error/Reusable/CustomTextField";
import CreateProduct from "../../assets/svg/CreateProduct.svg";
import Success from "../../components/Error/Reusable/Success";

const CreateProductDialog = ({ open, handleClose }) => {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleOpenSuccessDialog = () => {
    setOpenSuccessDialog(true);
    handleClose(); // Close the first dialog when opening the success dialog
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            width: "35%",
            maxWidth: "unset",
            margin: "16px",
            ".css-tlc64q-MuiPaper-root-MuiDialog-paper": {
              backgroundColor: "#f0f0f0",
            },
          },
        }}
      >
        <DialogTitle sx={{ color: "#54565C", fontSize: "1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography sx={{ color: "#54565C", fontSize: "1rem" }}>
                Create Product
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <ClearIcon
                sx={{
                  marginLeft: "auto",
                  cursor: "pointer",
                  color: "#54565C",
                  fontSize: "1.5rem",
                  alignItems: "center",
                }}
                onClick={handleClose}
              />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #D9D9D9",
              borderRadius: "3px",
              padding: "1rem",
            }}
          >
            <Grid item>
              <Grid container>
                <Grid item>
                  <img src={CreateProduct} alt="Create Product" />
                </Grid>
                <Grid item sx={{ marginLeft: "0.7rem" }}>
                  <div>
                    <Typography sx={{ fontSize: "0.9rem", color: "black" }}>
                      Nivabupa
                    </Typography>
                  </div>
                  <div>
                    <Typography sx={{ color: "#939393", fontSize: "0.8rem" }}>
                      Credit Life Insurance
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div style={{ background: "#F4F4F4", borderRadius: "4px" }}>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#54565C",
                    padding: "0.2rem 0.8rem",
                  }}
                >
                  Finhaat
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ marginTop: "1rem" }}>
            <Grid item xs={6}>
              <CustomTextField
                label="Effective Date"
                variant="outlined"
                fullWidth
                name="Effective Date"
                id="Effective Date"
                type="date"
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextField
                label="Effective Date"
                variant="outlined"
                fullWidth
                name="Effective Date"
                id="Effective Date"
                type="time"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Button
            sx={{
              width: "93%",
              background: "#DF2B87",
              color: "white",
              ":hover": {
                background: "#DF2B87",
              },
              padding: "0.6rem 1.5rem",
              textTransform: "none",
            }}
            //   onClick={handleClose}
            onClick={handleOpenSuccessDialog}
          >
            Create Product
          </Button>
        </DialogActions>
      </Dialog>
      <Success
        open={openSuccessDialog}
        handleClose={handleCloseSuccessDialog}
      />
    </>
  );
};

export default CreateProductDialog;
