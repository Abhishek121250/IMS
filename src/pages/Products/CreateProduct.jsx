import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import PolicyDetails from "./PolicyDetails";
import PolicyIcon from "@mui/icons-material/Policy";
import PremiumDetails from "./PremiumDetails";
import AccountDetails from "./AccountDetails";
import PreviewData from "./PreviewData";
import BreadCrumb from "../../components/Error/Reusable/BreadCrumb";
const CreateProduct = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [completedTabs, setCompletedTabs] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleTabChange = (event, newValue) => {
    // setTabIndex(newValue);
    if (completedTabs[newValue - 1] || newValue === 0) {
      setTabIndex(newValue);
    }
  };
  const markTabAsCompleted = (index) => {
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[index] = true;
    setCompletedTabs(newCompletedTabs);
  };

  // const goToNextTab = () => {
  //   setTabIndex(1);
  // };

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
                    background: "#DF2B87",
                    borderRadius: "50%",
                    height: "1.4rem",
                    width: "1.4rem",
                  }}
                >
                  <Typography>{index + 1}</Typography>
                </div>
                <div>
                  <Typography
                    style={{
                      color: "#54565C",
                      marginLeft: "0.4rem",
                      fontSize: "1rem",
                    }}
                  >
                    {label}
                  </Typography>
                </div>{" "}
              </Box>
            }
            sx={{
              border: "1px solid #E9E9E9",
              color: "#0009",
              pointerEvents:
                completedTabs[index - 1] || index === 0 ? "auto" : "none",
            }}
            onClick={(event) => {
              event.preventDefault(); // Prevent default tab click behavior
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
            <Typography>Details Content</Typography>
            <PremiumDetails
              goToNextTab={goToNextTab}
              goToPreviousTab={goToPreviousTab}
            />
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>More Info Content</Typography>
            <AccountDetails
              goToNextTab={goToNextTab}
              goToPreviousTab={goToPreviousTab}
            />
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <Typography>More Info Content</Typography>
            <PreviewData
              goToNextTab={goToNextTab}
              goToPreviousTab={goToPreviousTab}
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default CreateProduct;
