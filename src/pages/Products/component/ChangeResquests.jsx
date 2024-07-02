/* eslint-disable react/prop-types */
import { Card, Grid, Typography } from "@mui/material";

import ClockIcon from "../../../assets/svg/ClockIcon.svg";
import RejectIcon from "../../../assets/svg/RejectIcon.svg";
import TickIcon from "../../../assets/svg/TickIcon.svg";

const StatusCard = ({ icon, count, label, borderColor }) => {
    return (
        <Card
            elevation={1}
            sx={{
                padding: 2,
                borderLeft: `3px solid ${borderColor}`,
            }}
        >
            <Grid
                container
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Grid item xs={5}>
                    <Grid item xs={1}>
                        <img src={icon} alt={label} style={{ height: 20 }} />
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        sx={{
                            fontSize: "1.5rem",
                            fontWeight: "700",
                        }}
                    >
                        {count}
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{ fontSize: "1.3rem", fontWeight: "600" }}>
                {label}
            </Typography>
        </Card>
    );
};

const ChangeRequests = () => {
    // const approvedCount = data.filter((item) => item.status === "Approved").length;
    const approvedCount = 2;
    // const onHoldCount = data.filter(
    //     (item) =>
    //         item.status === "Waiting for Admin Approval" || item.status === "On Hold"
    // ).length;
    const pendingCount = 3;
    const rejectedCount = 5;
    // const rejectedCount = data.filter((item) => item.status === "Rejected").length;

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
                    count={pendingCount}
                    label="Pending"
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

export default ChangeRequests;
