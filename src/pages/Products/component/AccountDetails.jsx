/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from "@mui/material";
import CustomTextField from "../../../components/Reusable/CustomTextField";

const AccountDetails = ({ goToPreviousTab, goToNextTab }) => {
    return (
        <>
            <div style={{ margin: "1rem" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomTextField
                            label="Account Number"
                            variant="outlined"
                            fullWidth
                            name="Account Number"
                            id="Account Number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomTextField
                            label="Re enter Account Number"
                            variant="outlined"
                            fullWidth
                            name="Re enter Account Number"
                            id="Re enter Account Number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomTextField
                            label="IFSC Code"
                            variant="outlined"
                            fullWidth
                            name="IFSC Code"
                            id="IFSC Code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomTextField
                            label="Bank Name"
                            variant="outlined"
                            fullWidth
                            name="Bank Name"
                            id="Bank Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <CustomTextField
                            label="Account Holder Name"
                            variant="outlined"
                            fullWidth
                            name="Account Holder Name"
                            id="Account Holder Name"
                        />
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

export default AccountDetails;
