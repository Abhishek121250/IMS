/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomSelect from "../../../components/Reusable/CustomSelect";
import { Box, Button, Grid, Typography } from "@mui/material";

import ToggleButton from "../../../components/Reusable/ToggleButton";

const PolicyDetails = ({ goToNextTab }) => {
    const [selectedTab2, setSelectedTab2] = useState(0);
    const [selectedTab3, setSelectedTab3] = useState(0);
    const productToggleData = [{ label: "Yes" }, { label: "No" }];
    const premiumamountToggleData = [{ label: "Yes" }, { label: "No" }];
    const handleTabChange2 = (index) => setSelectedTab2(index);
    const handleTabChange3 = (index) => setSelectedTab3(index);
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
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
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
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
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
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
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
                <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "1rem" }}>
                    <CustomSelect
                        label="Master policy number"
                        menuItems={menuItems}
                        MenuProps={menuProps}
                        typographyProps={{
                            sx: {
                                fontSize: " 0.8rem",
                                marginBottom: 0.5,
                                color: "#707070",
                            },
                            children: "Master policy number",
                        }}
                    />
                    {/* <CustomTextField
            label="Master policy number"
            variant="outlined"
            fullWidth
            name="Account Number"
            id="Account Number"
          /> */}
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
                            <Typography sx={{ color: "#707070", fontSize: "12px" }}>
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
                                toggleData={productToggleData}
                                selectedTab={selectedTab2}
                                border="1px solid white"
                                handleChange={handleTabChange2}
                                isIconToggle={false}
                                selectedBgColor="#FFFFFF"
                                selectedColor="#000000"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {selectedTab2 === 0 && (
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
                            <Typography sx={{ color: "#707070", fontSize: "12px" }}>
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
                                toggleData={premiumamountToggleData}
                                selectedTab={selectedTab3}
                                border="1px solid white"
                                handleChange={handleTabChange3}
                                isIconToggle={false}
                                selectedBgColor="#FFFFFF"
                                selectedColor="#000000"
                            />
                        </Grid>
                    </Grid>
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
