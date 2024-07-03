import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import PolicyDetails from "./PolicyDetails";
import PremiumDetails from "./PremiumDetails";
import AccountDetails from "./AccountDetails";
import PreviewData from "./PreviewData";
import BreadCrumb from "../../../components/Reusable/BreadCrumb";
const CreateProduct = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [completedTabs, setCompletedTabs] = useState([false, false, false, false]);
    const handleTabChange = (event, newValue) => {
        if (completedTabs[newValue - 1] || newValue === 0) {
            setTabIndex(newValue);
        }
    };
    const markTabAsCompleted = (index) => {
        const newCompletedTabs = [...completedTabs];
        newCompletedTabs[index] = true;
        setCompletedTabs(newCompletedTabs);
    };

    const goToNextTab = () => {
        markTabAsCompleted(tabIndex);
        setTabIndex(tabIndex + 1);
    };
    const goToPreviousTab = () => {
        setTabIndex(tabIndex - 1);
    };
    return (
        <>
            <BreadCrumb
                title="Create Product"
                breadcrumbs={["Dashboard", "CreateProduct"]}
            />
            <Box style={{ boxShadow: "0px 1px 4px 0px #00000040" }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    TabIndicatorProps={{
                        sx: {
                            top: 0,
                            backgroundColor: "#DF2B87",
                            height: "3px",
                            borderRadius: "2px",
                            width: `${(tabIndex + 1) * 25}%`,
                        },
                    }}
                    aria-label="simple tabs example"
                >
                    {[
                        "Policy Details",
                        "Premium Details",
                        "Account Details",
                        "Preview Data",
                    ].map((label, index) => (
                        <Tab
                            key={index}
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#E9E9E9",
                                        padding: "3px 10px 3px 3px ",
                                        borderRadius: "1rem",
                                        textTransform: "none",
                                    }}
                                >
                                    <div
                                        style={{
                                            background:
                                                tabIndex === index
                                                    ? "#DF2B87"
                                                    : "#E9E9E9",
                                            borderRadius: "50%",
                                            height: "1.2rem",
                                            width: "1.2rem",
                                        }}
                                    >
                                        <Typography sx={{ fontSize: "0.8rem" }}>
                                            {index + 1}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            sx={{
                                                color: "#54565C",
                                                marginLeft: "0.4rem",
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    </div>{" "}
                                </Box>
                            }
                            sx={{
                                padding: "0px",
                                border: "1px solid #E9E9E9",
                                color: "#0009",
                                pointerEvents:
                                    completedTabs[index - 1] || index === 0
                                        ? "auto"
                                        : "none",
                            }}
                            onClick={(event) => {
                                event.preventDefault();
                            }}
                        />
                    ))}
                </Tabs>
                <Box sx={{ border: "1px solid #E9E9E9" }}>
                    {tabIndex === 0 && (
                        <Box>
                            <PolicyDetails goToNextTab={goToNextTab} />
                        </Box>
                    )}
                    {tabIndex === 1 && (
                        <Box>
                            <PremiumDetails
                                goToNextTab={goToNextTab}
                                goToPreviousTab={goToPreviousTab}
                            />
                        </Box>
                    )}
                    {tabIndex === 2 && (
                        <Box>
                            <AccountDetails
                                goToNextTab={goToNextTab}
                                goToPreviousTab={goToPreviousTab}
                            />
                        </Box>
                    )}
                    {tabIndex === 3 && (
                        <Box>
                            <PreviewData
                                goToNextTab={goToNextTab}
                                goToPreviousTab={goToPreviousTab}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default CreateProduct;
