import CustomSelect from "../../components/Error/Reusable/CustomSelect";
import { Box, Button, Grid, Typography } from "@mui/material";

const PolicyDetails = ({ goToNextTab }) => {
  const menuItems = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
          <CustomSelect
            label="Partner Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Partner Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
          <CustomSelect
            label="Provider Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Provider Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
          <CustomSelect
            label="Product Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Product Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
          <CustomSelect
            label="Master policy number"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Master policy number",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Min Entry Age"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Min Entry Age",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Max Entry Age"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Max Entry Age",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Policy Maturity Age"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Policy Maturity Age",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Policy Tenure"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Policy Tenure",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Partner Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Partner Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Provider Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Provider Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Product Name"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Product Name",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomSelect
            label="Master policy number"
            menuItems={menuItems}
            typographyProps={{
              sx: { fontSize: "0.9rem", marginBottom: 0.5, color: "#707070" },
              children: "Master policy number",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
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
              onClick={goToNextTab}
            >
              <Typography>Save & Proceed</Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default PolicyDetails;
