/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";

import LoanPaper from "../../../assets/svg/LoanPaper.svg";

const styles = {
    headerStyle: {
        border: "1px solid rgba(96, 96, 96, 0.1)",
        textAlign: "center",
        color: "#606060",
        fontSize: "0.8rem",
        fontWeight: 600,
        padding: "10px",
        backgroundColor: "#F7F7F7",
    },
    mainTextStyle: {
        color: "#606060",
        fontSize: "0.7rem",
        fontWeight: 500,
        paddingBottom: 0.5,
    },
    subTextStyle: {
        fontSize: "0.7rem",
        fontWeight: 500,
    },
};

const HeaderComponent = ({ title }) => (
    <Typography sx={styles.headerStyle}>{title}</Typography>
);

const DetailsComponent = ({ mainText, subText }) => (
    <Grid container>
        <Grid item xs={6} sx={styles.mainTextStyle}>
            {mainText}
        </Grid>
        <Grid item xs={6} sx={styles.subTextStyle}>
            {subText}
        </Grid>
    </Grid>
);

const ImageViewerComponent = () => (
    <Grid container>
        <Grid item xs={4}>
            -
        </Grid>
        <Grid item xs={4}>
            -
        </Grid>
    </Grid>
);

const img = "117e5022-42e9-4bc2-bf3c-f9aea9220306";
const ViewProduct = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                            <HeaderComponent title="Policy Details" />
                        </Grid>
                        <Grid item xs={4}>
                            <HeaderComponent title="Premium Details" />
                        </Grid>
                        <Grid item xs={4}>
                            <HeaderComponent title="Account Details" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={{ padding: 1, border: "1px solid rgba(96, 96, 96, 0.1)" }}
                >
                    <DetailsComponent mainText="Consent" subText="Digital" />
                    <DetailsComponent mainText="Insurance" subText="Double" />
                    <DetailsComponent mainText="Policy Tenure" subText="24 months" />
                    <DetailsComponent mainText="Min Entry Age" subText="18" />
                    <DetailsComponent mainText="Max Entry Age" subText="35" />
                    <DetailsComponent mainText="Maturity Age" subText="48" />
                </Grid>

                <Grid item xs={8} sx={{ border: "1px solid rgba(96, 96, 96, 0.1)" }}>
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                p: 1,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <DetailsComponent
                                mainText="For 30K Loan"
                                subText="₹ 1,500"
                            />
                            <DetailsComponent
                                mainText="For 40K Loan"
                                subText="₹ 2,000"
                            />
                            <DetailsComponent
                                mainText="For 50K Loan"
                                subText="₹ 2,500"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                p: 1,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <DetailsComponent
                                mainText="Account Number"
                                subText="672254098767"
                            />
                            <DetailsComponent
                                mainText="IFSC Code"
                                subText="ICICI000008"
                            />
                            <DetailsComponent
                                mainText="Bank Name"
                                subText="ICICI Bank"
                            />
                            <DetailsComponent
                                mainText="Holder Name"
                                subText="Srikanth Pasnuri"
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                padding: 1,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <Grid container>
                                <Grid item xs={8}>
                                    <Typography
                                        sx={{
                                            color: "#606060",
                                            fontSize: "0.7rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Payment Mode
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "0.7rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Disbursment Deduction
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <img src={LoanPaper} alt="Payment Logo" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                padding: 1,
                            }}
                        >
                            <DetailsComponent mainText="Image Proof" />
                            <Grid item xs={12} sx={{ pl: 1 }}>
                                <ImageViewerComponent imgSrc={img} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ViewProduct;
