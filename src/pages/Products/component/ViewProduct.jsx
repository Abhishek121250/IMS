/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import LoanPaper from "../../../assets/svg/LoanPaper.svg";
import useGetProductById from "../../../store/useGetProductById";

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
        fontSize: "12px",
        fontWeight: 500,
        paddingBottom: 0.5,
    },
    subTextStyle: {
        fontSize: "12px",
        fontWeight: 400,
        display: "flex",
        justifyContent: "right",
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

const ImageViewerComponent = () => <Grid container>-</Grid>;

const ViewProduct = ({ productId }) => {
    const data = useGetProductById({ productId });

    const viewData = data?.data?.data?.data;
    console.log(viewData);
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
                    sx={{ padding: 2, border: "1px solid rgba(96, 96, 96, 0.1)" }}
                >
                    <DetailsComponent
                        mainText="Consent"
                        subText={viewData?.consentType || "-"}
                    />
                    <DetailsComponent
                        mainText="Insurance"
                        subText={viewData?.insuranceType || "-"}
                    />
                    <DetailsComponent
                        mainText="Min Entry Age"
                        subText={viewData?.minEntryAge || "-"}
                    />
                    <DetailsComponent
                        mainText="Max Entry Age"
                        subText={viewData?.maxEntryAge || "-"}
                    />
                    <DetailsComponent
                        mainText="Maturity Age"
                        subText={viewData?.maturityAge || "-"}
                    />
                    <DetailsComponent
                        mainText="Master Policy Number"
                        subText={viewData?.masterPolicyNumber || "-"}
                    />
                </Grid>

                <Grid item xs={8} sx={{ border: "1px solid rgba(96, 96, 96, 0.1)" }}>
                    <Grid container>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                p: 2,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <DetailsComponent
                                mainText="For ₹500 Premium"
                                subText={`₹ ${
                                    viewData?.premiums?.premiumAmount500 || "-"
                                }`}
                            />
                            <DetailsComponent
                                mainText="For ₹500 Premium"
                                subText={`₹ ${
                                    viewData?.premiums?.premiumAmount800 || "-"
                                }`}
                            />
                            <DetailsComponent
                                mainText="For ₹1200 Premium"
                                subText={`₹ ${
                                    viewData?.premiums?.premiumAmount1200 || "-"
                                }`}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                p: 2,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <DetailsComponent
                                mainText="Account Number"
                                subText={viewData?.bankAccount?.accountNo || "-"}
                            />
                            <DetailsComponent
                                mainText="IFSC Code"
                                subText={viewData?.bankAccount?.ifscCode || "-"}
                            />
                            <DetailsComponent
                                mainText="Bank Name"
                                subText={viewData?.bankAccount?.bankName || "-"}
                            />
                            <DetailsComponent
                                mainText="Holder Name"
                                subText={viewData?.bankAccount?.holderName || "-"}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                padding: 2,
                                border: "1px solid rgba(96, 96, 96, 0.1)",
                            }}
                        >
                            <Grid container>
                                <Grid item xs={8}>
                                    <Typography
                                        sx={{
                                            color: "#606060",
                                            fontSize: "12px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Payment Mode
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "12px",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {viewData?.paymentType?.paymentMode || "-"}
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
                                padding: 2,
                            }}
                        >
                            <DetailsComponent mainText="Image Proof" subText="" />
                            <Grid item xs={12} sx={{ pl: 1 }}>
                                <ImageViewerComponent
                                    imgSrc={
                                        viewData?.bankAccount
                                            ?.proofOfAccountConfirmation
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ViewProduct;
