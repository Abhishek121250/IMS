import { useState } from "react";

import { Grid, Typography } from "@mui/material";

import ToggleButton from "../../../components/Reusable/ToggleButton";
import AllProducts from "./AllProducts";
import ApprovedProducts from "./ApprovedProducts";
import CreatedProducts from "./CreatedProducts";
import RejectedProducts from "./RejectedProducts";

const ProductList = () => {
    const [selectedTab2, setSelectedTab2] = useState(0);

    const productToggleData = [
        { label: "All Products" },
        { label: "Created" },
        { label: "Approved" },
        { label: "Rejected" },
    ];

    const handleTabChange2 = (index) => setSelectedTab2(index);

    const renderProductList = () => {
        switch (selectedTab2) {
            case 0:
                return <AllProducts />;
            case 1:
                return <CreatedProducts />;
            case 2:
                return <ApprovedProducts />;
            case 3:
                return <RejectedProducts />;
            default:
                return null;
        }
    };

    return (
        <Grid container spacing={1} sx={{ maxHeight: "100%", pl: 3 }}>
            <Grid item xs={12}>
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        fontWeight: 600,
                    }}
                >
                    Product List
                </Typography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ maxWidth: "100%" }}>
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
            <Grid item xs={12} sx={{ minHeight: "50vh" }}>
                {renderProductList()}
            </Grid>
        </Grid>
    );
};

export default ProductList;
