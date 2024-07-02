import { Card, Grid } from "@mui/material";

import NivaBupa from "../../../assets/svg/NivaBupa.svg";
import ViewProduct from "./ViewProduct";

const PreviewData = () => {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sx={{ pt: 5, pb: 5 }}>
                    <img src={NivaBupa} alt="logo" />
                </Grid>
                <Grid item xs={12}>
                    <Card elevation={1}>
                        <ViewProduct />
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default PreviewData;
