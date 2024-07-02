/* eslint-disable react/prop-types */
import { Card, Grid, Typography } from "@mui/material";

import data from "../../../data";
import ClockIcon from "../../../assets/svg/ClockIcon.svg";
import RejectIcon from "../../../assets/svg/RejectIcon.svg";
import TickIcon from "../../../assets/svg/TickIcon.svg";

const StatusCard = ({ icon, count, label, borderColor }) => {
    return (
        <Card
            elevation={1}
            sx={{
                padding: 1,
                paddingLeft: 2,
                borderLeft: `3px solid ${borderColor}`,
            }}
        >
            <Grid
                container
                rowSpacing={1}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
                    <img src={icon} alt={label} style={{ height: 20 }} />
                </Grid>
                <Grid item xs={5}>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            fontWeight: "600",
                        }}
                    >
                        {count}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "600" }}>
                        {label}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

const Product = () => {
    const approvedCount = data.filter((item) => item.status === "Approved").length;
    const onHoldCount = data.filter(
        (item) =>
            item.status === "Waiting for Admin Approval" || item.status === "On Hold"
    ).length;
    const rejectedCount = data.filter((item) => item.status === "Rejected").length;

    return (
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item xs={4}>
                <StatusCard
                    icon={TickIcon}
                    count={approvedCount}
                    label="Approved"
                    borderColor="#299253"
                />
            </Grid>
            <Grid item xs={4}>
                <StatusCard
                    icon={ClockIcon}
                    count={onHoldCount}
                    label="On Hold"
                    borderColor="#4D66AA"
                />
            </Grid>
            <Grid item xs={4}>
                <StatusCard
                    icon={RejectIcon}
                    count={rejectedCount}
                    label="Rejected"
                    borderColor="#E33C29"
                />
            </Grid>
        </Grid>
    );
};

export default Product;
