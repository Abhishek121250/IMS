// import React from "react";

// const Success = () => {
//   return <>hello</>;
// };

// export default Success;

// Success.jsx

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import SuccessIcon from "../../../assets/svg/SuccessIcon.svg";
const Success = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          width: "30%",
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
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <img src={SuccessIcon} />
        </div>
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div>
            <Typography sx={{ color: "#2C3039", fontSize: "1rem" }}>
              Product creation successful
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                color: "#707070",
                fontSize: "0.9rem",
                marginTop: "0.5rem",
              }}
            >
              Product Id : FIN-HOSP-ICICI
            </Typography>
          </div>
        </div>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        <Button
          sx={{
            width: "58%",
            border:
              " 1px solid linear-gradient(90deg, #DF2B87 0%, #1F78FF 100%);",
            background:
              "linear-gradient(90deg, rgba(223, 43, 135, 0.3) 0%, rgba(77, 102, 170, 0.3) 100%);",
            color: "#DF2B87",
            ":hover": {
              background:
                "linear-gradient(90deg, rgba(223, 43, 135, 0.3) 0%, rgba(77, 102, 170, 0.3) 100%);",
            },
            padding: "0.6rem 1.5rem",
            textTransform: "none",
          }}
          onClick={handleClose}
        >
          Go to Dashboard
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Success;
