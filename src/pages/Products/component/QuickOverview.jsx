import { useState } from "react";

import { Card, Grid, Typography } from "@mui/material";

import ToggleButton from "../../../components/Reusable/ToggleButton";
import ChangeRequests from "./ChangeResquests";
import Product from "./Product";

const QuickOverview = () => {
    const [selectedTab1, setSelectedTab1] = useState(0);
    const dashBoardToggleData = [{ label: "Product" }, { label: "Change Requests" }];

    const handleTabChange1 = (index) => setSelectedTab1(index);

    const renderContent = () => {
        switch (selectedTab1) {
            case 0:
                return <Product />;
            case 1:
                return <ChangeRequests />;
            default:
                return null;
        }
    };
    return (
        <Grid container>
            <Card elevation={2}>
                <Grid container spacing={2} rowSpacing={2} sx={{ p: 2 }}>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            display: "flex",
                            justifyContent: "left",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "1.5rem",
                                fontWeight: 600,
                                color: "#54565C",
                            }}
                        >
                            Quick Overview
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={7}
                        sx={{
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ minWidth: "90%" }}>
                            <ToggleButton
                                toggleData={dashBoardToggleData}
                                selectedTab={selectedTab1}
                                handleChange={handleTabChange1}
                                isIconToggle={false}
                                selectedBgColor="#FFFFFF"
                                selectedColor="#000000"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        {renderContent()}
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    );
};

export default QuickOverview;
