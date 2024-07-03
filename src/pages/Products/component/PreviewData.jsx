import { Box, Button, Card, Grid, Typography } from "@mui/material";

import NivaBupa from "../../../assets/svg/NivaBupa.svg";
import ViewProduct from "./ViewProduct";

const PreviewData = (goToNextTab) => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sx={{ p: 2 }}>
                    <img src={NivaBupa} alt="logo" />
                </Grid>
                <Grid item xs={12}>
                    <Card elevation={1} sx={{ marginLeft: 2, marginRight: 2 }}>
                        <ViewProduct />
                    </Card>
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
    );
};

export default PreviewData;
