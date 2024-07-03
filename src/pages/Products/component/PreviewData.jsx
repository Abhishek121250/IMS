/* eslint-disable react/prop-types */
import { Box, Button, Card, Grid, Typography } from "@mui/material";

import NivaBupa from "../../../assets/svg/NivaBupa.svg";
import ViewProduct from "./ViewProduct";

const styles = {
    productProvider: { fontSize: "1rem", fontWeight: 500, color: "#2C3039" },
    productPartner: {
        fontSize: "0.7rem",
        fontWeight: 500,
        color: "#54565C",
        borderRight: "1px solid #54565C",
    },
    productStyle: {
        fontSize: "0.7rem",
        fontWeight: 500,
        ml: 2,
        color: "#54565C",
    },
};

const productbyID = {
    id: "prd-dce05a9a-4b7a-40eb-b915-951bd457b5ad",
    providerId: "prv-1a70dfd6-6464-4c32-9f52-ee413ebf37aa",
    provider: "Pramerica",
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

const ProductDetails = ({ provider, partner, product }) => (
    <Grid container>
        <Grid item xs={12} sx={styles.productProvider}>
            {provider}
        </Grid>
        <Grid item xs={4} sx={styles.productPartner}>
            {partner}
        </Grid>
        <Grid item xs={6} sx={styles.productStyle}>
            {product}
        </Grid>
    </Grid>
);

const PreviewData = ({ goToPreviousTab, createProduct }) => {
    return (
        <div style={{ margin: 5 }}>
            <Card
                elevation={2}
                sx={{
                    "&.MuiCardContent-root:last-child": {
                        padding: 0,
                    },
                }}
            >
                <Grid container>
                    <Grid item xs={12}>
                        <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                alignItems: "center",
                            }}
                        >
                            <Grid item xs={1}>
                                <img src={NivaBupa} alt="logo" />
                            </Grid>
                            <Grid item>
                                <Grid item xs={6}>
                                    <ProductDetails
                                        provider={productbyID?.provider}
                                        partner={productbyID?.partner}
                                        product={productbyID?.name}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Card elevation={1} sx={{ marginLeft: 2, marginRight: 2 }}>
                            <ViewProduct productbyID={productbyID} />
                        </Card>
                    </Grid>
                </Grid>
            </Card>
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
                            onClick={createProduct}
                        >
                            <Typography>Create Product</Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default PreviewData;
