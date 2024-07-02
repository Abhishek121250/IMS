import React from "react";
import { Box, Button, Typography } from "@mui/material";
import abc from "../../assets/abc.svg";
import BreadCrumb from "../../components/Error/Reusable/BreadCrumb";
import { useNavigate } from "react-router-dom";
function Counter() {
  const navigate = useNavigate();

  const handleCreateProductClick = () => {
    navigate("/product/create");
  };

  return (
    <>
      <BreadCrumb title="Product List" breadcrumbs={["Home", "Products"]} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "64vh",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            background: "#FAFAFA",
            width: "35%",
            display: "flex",
            border: "1px solid #D8D5D5",
            borderRadius: "5px",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box>
            <img src={abc} style={{ width: "90%", marginLeft: "1rem" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ textAlign: "center", color: "#322B42" }}>
              Welcome,
              <br />
              Start creating a product{" "}
            </Typography>
          </Box>
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
                background: "#DF2B87",
                color: "white",
                ":hover": {
                  background: "#DF2B87",
                },
                padding: "0.6rem 1.5rem",
              }}
              onClick={handleCreateProductClick}
            >
              <Typography>Create Product</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Counter;
