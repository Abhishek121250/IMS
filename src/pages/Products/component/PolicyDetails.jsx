/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomSelect from "../../../components/Reusable/CustomSelect";
import { Box, Button, Grid, Typography } from "@mui/material";

import ToggleButton from "../../../components/Reusable/ToggleButton";
import CustomTextField from "../../../components/Reusable/CustomTextField";

const PolicyDetails = ({ goToNextTab }) => {
    const [ratePerThousandSelected, setRatePerThousandSelected] = useState(false);
    const [premiumAmountRoundUpSelected, setPremiumAmountRoundUpSelected] =
        useState(false);

    const handleRatePerThousandToggle = () => {
        setRatePerThousandSelected(!ratePerThousandSelected);
    };

    const handlePremiumAmountRoundUpToggle = () => {
        setPremiumAmountRoundUpSelected(!premiumAmountRoundUpSelected);
    };
    const menuItems = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];
    const partnerName = [
        { label: "Bhima", value: "Bhima" },
        { label: "finhaat", value: "finhaat" },
    ];
    const providerName = [
        { label: "Bhima", value: "Bhima" },
        { label: "finhaat", value: "finhaat" },
    ];
    const ProductName = [
        { label: "Group Hospicash", value: "Group Hospicash" },
        { label: "finhaat", value: "finhaat" },
    ];
    const menuProps = {
        PaperProps: {
            sx: {
                "& .MuiMenuItem-root": {
                    fontSize: "13px",
                },
            },
        },
    };
    return (
        <>
            <div>
                <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Partner Name"
                                MenuProps={menuProps}
                                menuItems={partnerName}
                                typographyProps={{
                                    sx: {
                                        fontSize: "0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Partner Name",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Provider Name"
                                menuItems={providerName}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: "0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Provider Name",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Product Name"
                                menuItems={ProductName}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Product Name",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomTextField
                                label="Master policy number"
                                variant="outlined"
                                fullWidth
                                name="Master policy number"
                                id="Master policy number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Min Entry Age"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Min Entry Age",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Max Entry Age"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Max Entry Age",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Policy Maturity Age"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Policy Maturity Age",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Policy Tenure"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Policy Tenure",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Consent Type"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Consent Type",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <CustomSelect
                                label="Insurance Type"
                                menuItems={menuItems}
                                MenuProps={menuProps}
                                typographyProps={{
                                    sx: {
                                        fontSize: " 0.8rem",
                                        marginBottom: 0.5,
                                        color: "#707070",
                                    },
                                    children: "Insurance Type",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Grid container sx={{ marginLeft: "1rem" }}>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{ color: "#707070", fontSize: "12px" }}
                                    >
                                        Rate Per Thousand
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    rowSpacing={4}
                                    xs={4}
                                    sx={{ marginTop: "0.7rem" }}
                                >
                                    <ToggleButton
                                        toggleData={[
                                            { label: "Yes" },
                                            { label: "No" },
                                        ]}
                                        selectedTab={ratePerThousandSelected ? 0 : 1}
                                        border="1px solid white"
                                        handleChange={handleRatePerThousandToggle}
                                        isIconToggle={false}
                                        selectedBgColor="#FFFFFF"
                                        selectedColor="#000000"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {ratePerThousandSelected && (
                            <Grid item xs={12} sm={6} md={3}>
                                <CustomSelect
                                    label="Rate Per Thousand"
                                    menuItems={menuItems}
                                    MenuProps={menuProps}
                                    typographyProps={{
                                        sx: {
                                            fontSize: " 0.8rem",
                                            marginBottom: 0.5,
                                            color: "#707070",
                                        },
                                        children: "Rate Per Thousand",
                                    }}
                                />
                            </Grid>
                        )}
                        <Grid item xs={12} sm={6} md={3}>
                            <Grid container sx={{ marginLeft: "1rem" }}>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{ color: "#707070", fontSize: "12px" }}
                                    >
                                        Premium Amount Round Up
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    rowSpacing={4}
                                    xs={4}
                                    sx={{ marginTop: "0.7rem" }}
                                >
                                    <ToggleButton
                                        toggleData={[
                                            { label: "Yes" },
                                            { label: "No" },
                                        ]}
                                        selectedTab={
                                            premiumAmountRoundUpSelected ? 0 : 1
                                        }
                                        border="1px solid white"
                                        handleChange={
                                            handlePremiumAmountRoundUpToggle
                                        }
                                        isIconToggle={false}
                                        selectedBgColor="#FFFFFF"
                                        selectedColor="#000000"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "0.4rem",
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
                    marginTop: "1.4rem",
                  }}
                  onClick={goToNextTab}
                >
                  <Typography sx={{ color: "#ffff" }}>Save & Proceed</Typography>
                </Button>
              </Box>
            </Grid> */}
                    </Grid>
                </div>
                <div>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "start",
                            marginLeft: "0.4rem",
                        }}
                    >
                        <Button
                            sx={{
                                width: "22.4%",
                                background: "#DF2B87",
                                color: "white",
                                ":hover": {
                                    background: "#DF2B87",
                                },
                                padding: "0.6rem 1.5rem",
                                textTransform: "none",
                                mt: 0.5,
                                ml: 2,
                                mb: 2,
                            }}
                            onClick={goToNextTab}
                        >
                            <Typography sx={{ color: "#ffff" }}>
                                Save & Proceed
                            </Typography>
                        </Button>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default PolicyDetails;
