/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import LoanPaper from "../../../assets/svg/LoanPaper.svg";

const databyID = {
    id: "prd-dce05a9a-4b7a-40eb-b915-951bd457b5ad",
    providerId: "prv-1a70dfd6-6464-4c32-9f52-ee413ebf37aa",
    name: "Hospicash",
    partner: "Finhaat",
    policyDetails: {
        consent: "Digital",
        insurance: "Single",
        minEntryAge: 18,
        maxEntryAge: 65,
        maturityAge: 75,
        masterPolicyNumber: "MPN123456",
        ratePerThousand: 10,
    },
    premiumDetails: {
        sumAssured: "10000.00",
        premiumAmount: "250.00",
        paymentMode: "UPI",
    },
    accountDetails: {
        accountNo: "1234567890",
        HolderName: "Srikanth Pansuri",
        ifscCode: "ABCD0123456",
        bankName: "Sample Bank",
        proofOfAccountConfirmation: [
            {
                img1: "proof123.jpg",
                img2: "proof456.jpg",
            },
        ],
    },
};

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

const ImageViewerComponent = ({ imgSrc }) => (
    <Grid container>
        {imgSrc.map((src, index) => (
            <Grid item xs={6} key={index}>
                <img
                    src={src}
                    alt={`Proof ${index + 1}`}
                    style={{ width: "100%" }}
                />
            </Grid>
        ))}
    </Grid>
);

const ViewProduct = () => {
    const { policyDetails, premiumDetails, accountDetails } = databyID;

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
                    <DetailsComponent
                        mainText="Consent"
                        subText={policyDetails.consent}
                    />
                    <DetailsComponent
                        mainText="Insurance"
                        subText={policyDetails.insurance}
                    />
                    <DetailsComponent
                        mainText="Min Entry Age"
                        subText={policyDetails.minEntryAge}
                    />
                    <DetailsComponent
                        mainText="Max Entry Age"
                        subText={policyDetails.maxEntryAge}
                    />
                    <DetailsComponent
                        mainText="Maturity Age"
                        subText={policyDetails.maturityAge}
                    />
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
                                mainText="Sum Assured"
                                subText={`₹ ${premiumDetails.sumAssured}`}
                            />
                            <DetailsComponent
                                mainText="Premium Amount"
                                subText={`₹ ${premiumDetails.premiumAmount}`}
                            />
                            <DetailsComponent
                                mainText="Payment Mode"
                                subText={premiumDetails.paymentMode}
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
                                subText={accountDetails.accountNo}
                            />
                            <DetailsComponent
                                mainText="IFSC Code"
                                subText={accountDetails.ifscCode}
                            />
                            <DetailsComponent
                                mainText="Bank Name"
                                subText={accountDetails.bankName}
                            />
                            <DetailsComponent
                                mainText="Holder Name"
                                subText={accountDetails.HolderName}
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
                                        Disbursement Deduction
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
                            <DetailsComponent mainText="Image Proof" subText="" />
                            <Grid item xs={12} sx={{ pl: 1 }}>
                                <ImageViewerComponent
                                    imgSrc={accountDetails.proofOfAccountConfirmation.map(
                                        (proof) => proof.img1
                                    )}
                                />
                                <ImageViewerComponent
                                    imgSrc={accountDetails.proofOfAccountConfirmation.map(
                                        (proof) => proof.img2
                                    )}
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
