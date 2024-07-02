import React from "react";
import { TextField, Typography } from "@mui/material";

const CustomTextField = ({ label, ...props }) => {
  return (
    <>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
        {label && (
          <Typography sx={{ color: "#707070", mb: 0.6 }}>{label}</Typography>
        )}
        <TextField
          {...props}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              "& input": {
                padding: "10px",
                fontSize: "14px",
              },
            },
            "& .MuiInputLabel-root": {
              fontSize: "14px",
            },
            ...props.sx,
          }}
        />
      </div>
    </>
  );
};

export default CustomTextField;
