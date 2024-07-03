/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from "@mui/material";
import PaymentMode from "../../../components/Reusable/PaymentMode";
import Upisvg from "../../../assets/svg/Upisvg.svg";
import Shecomsvg from "../../../assets/svg/Shecomsvg.svg";
import Vector from "../../../assets/svg/Vector.svg";
import Cashsvg from "../../../assets/svg/Cashsvg.svg";
import loanIcon from "../../../assets/svg/loanIcon.svg";
import { useState } from "react";
import React from "react";

const PremiumDetails = ({ goToPreviousTab, goToNextTab }) => {
    const [selectedPaymentMode, setSelectedPaymentMode] = useState(null);

    const handleSelectPaymentMode = (mode) => {
        setSelectedPaymentMode(mode);
    };
    // const commonGridStyle = {
    //     border: "0.5px solid #CFD1D4",
    //     padding: "0px",
    //     textAlign: "center",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    // };

    return (
        <>
            <div style={{ padding: "1rem" }}>
                <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                        sx={{
                            fontSize: "0.85rem",
                            color: "#707070",
                            marginLeft: "1rem",
                        }}
                    >
                        Choose Payment Mode
                    </Typography>

                    <div
                        style={{
                            height: "4.9rem",
                            display: "flex",
                            flexDirection: "row",
                            gap: 30,
                            margin: "0.5rem",
                        }}
                    >
                        <PaymentMode
                            iconSrc={Shecomsvg}
                            upi={Upisvg}
                            Vector={Vector}
                            description="A QR will be shown during collection"
                            isSelected={selectedPaymentMode === "shecom"}
                            onSelect={() => handleSelectPaymentMode("shecom")}
                        />
                        <PaymentMode
                            iconSrc={Shecomsvg}
                            upi={Upisvg}
                            Vector={Vector}
                            description="A QR will be shown during collection"
                            isSelected={selectedPaymentMode === "shecom2"}
                            onSelect={() => handleSelectPaymentMode("shecom2")}
                        />
                        <PaymentMode
                            iconSrc={Cashsvg}
                            Vector={Vector}
                            label="Cash Collection"
                            description="A QR will be shown during collection"
                            isSelected={selectedPaymentMode === "cash"}
                            onSelect={() => handleSelectPaymentMode("cash")}
                        />
                        <PaymentMode
                            iconSrc={loanIcon}
                            Vector={Vector}
                            label="Disbursement Deduction"
                            description="A QR will be shown during collection"
                            isSelected={selectedPaymentMode === "loan"}
                            onSelect={() => handleSelectPaymentMode("loan")}
                        />
                    </div>
                </Grid>
                <Typography
                    sx={{
                        fontSize: "0.85rem",
                        color: "#707070",
                        marginLeft: "1rem",
                        marginTop: "0.6rem",
                        marginBottom: "1rem",
                    }}
                >
                    Premium Structure
                </Typography>
                <Grid
                    container
                    spacing={1}
                    sx={{ width: "97.3%", marginLeft: "1rem" }}
                >
                    <Grid
                        item
                        xs={1}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography sx={{ fontSize: "0.8rem", color: "#54565C" }}>
                            S.NO
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", color: "#54565C" }}
                            variant="h6"
                        >
                            Loan Amount
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", color: "#54565C" }}
                            variant="h6"
                        >
                            Sum Assured
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", color: "#54565C" }}
                            variant="h6"
                        >
                            Premium Amount
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", color: "#54565C" }}
                            variant="h6"
                        >
                            Premium Amount Round up
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        style={{
                            border: "0.5px solid #CFD1D4",
                            textAlign: "center",
                            padding: "5px",
                        }}
                    >
                        <Typography
                            sx={{ fontSize: "0.8rem", color: "#54565C" }}
                            variant="h6"
                        >
                            Action
                        </Typography>
                    </Grid>
                    {Array.from({ length: 3 }, (_, index) => (
                        <React.Fragment key={index}>
                            <Grid
                                item
                                xs={1}
                                style={{
                                    border: "0.5px solid #CFD1D4",
                                    padding: "0px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "0.8rem", color: "#2C3039" }}
                                >
                                    {index + 1}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                style={{
                                    border: "0.5px solid #CFD1D4",
                                    padding: "0px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "0.8rem", color: "#2C3039" }}
                                >
                                    ₹30,000
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                style={{
                                    border: "0.5px solid #CFD1D4",
                                    padding: "0px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "0.8rem", color: "#2C3039" }}
                                >
                                    ₹30,000
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                style={{
                                    border: "0.5px solid #CFD1D4",
                                    padding: "0px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "0.8rem", color: "#2C3039" }}
                                >
                                    ₹30,000
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                style={{
                                    border: "0.5px solid #CFD1D4",
                                    padding: "0px",
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "0.8rem", color: "#2C3039" }}
                                >
                                    ₹30,000
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                container
                                style={{
                                    padding: "0px",
                                    border: "0.5px solid #CFD1D4",
                                    textAlign: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        border: "0.5px solid #CFD1D4",
                                        padding: "0px",
                                        textAlign: "center",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            width: "100%",
                                            height: "2rem",
                                            color: "#939393",
                                            textTransform: "none",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={6}
                                    sx={{
                                        border: "0.5px solid #CFD1D4",
                                        padding: "0px",
                                        textAlign: "center",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            width: "100%",
                                            height: "2rem",
                                            background: "#F8F8F8",
                                            color: "#939393",
                                            textTransform: "none",
                                            fontSize: "0.8rem",
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
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
                                    width: "100%",
                                    background: "#DF2B87",
                                    color: "white",
                                    ":hover": {
                                        background: "#DF2B87",
                                    },
                                    padding: "0.6rem 1.5rem",
                                    textTransform: "none",
                                }}
                                onClick={goToPreviousTab}
                            >
                                <Typography>Previous Step</Typography>
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
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
            </div>
        </>
    );
};

export default PremiumDetails;
