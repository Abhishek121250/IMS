/* eslint-disable react/prop-types */
import React from "react";
import { Box, Typography, styled } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StyledBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
}));

const Breadcrumb = styled("div")(() => ({
    height: "1.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F3F3F3",
    color: "#707070",
    border: "1px solid #E9E9E9",
    padding: "1px 5px",
    borderRadius: "5px",
    fontSize: "0.7rem",
}));

const BreadCrumb = ({
    title = "Product List",
    breadcrumbs = ["Home", "Dashboard"],
}) => {
    // const {app,setLoading}=useAppState();
    // setLoading(false)
    // console.log(app.loading)
    return (
        <Box>
            <Box>
                <Typography
                    sx={{ fontWeight: "600", color: "black", fontSize: "1rem" }}
                >
                    {title}
                </Typography>
            </Box>
            <StyledBox>
                {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                        <Breadcrumb>{crumb}</Breadcrumb>
                        {index < breadcrumbs.length - 1 && (
                            <KeyboardArrowRightIcon />
                        )}
                    </React.Fragment>
                ))}
            </StyledBox>
        </Box>
    );
};

export default BreadCrumb;
