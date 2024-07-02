/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Card, Grid, Typography } from "@mui/material";

import EditIcon from "../../../assets/svg/EditIcon";
import HideIcon from "../../../assets/svg/HideIcon";
import Logo from "../../../assets/svg/Logo.svg";
import NivaBupa from "../../../assets/svg/NivaBupa.svg";
import Pramerica from "../../../assets/svg/Pramerica.svg";
import VersionIcon from "../../../assets/svg/VersionIcon";
import ViewIcon from "../../../assets/svg/ViewIcon";
import timeStampToSentence from "../../../components/Reusable/timeStampToSentence";
import VersionHistory from "./VersionHistory";
import ViewProduct from "./ViewProduct";

const styles = {
    cardStyle: {
        backgroundColor: "#F6F6F6",
        border: "1px solid #DEDEDE",
        marginTop: 1,
        marginBottom: 2,
        marginRight: 3,
    },
    buttonTextStyle: {
        paddingLeft: 2,
        fontSize: "1rem",
        fontWeight: 500,
    },
    statusContainerStyle: {
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
    },
    bottomTextStyle: {
        margin: 1,
        marginLeft: 1.5,
        fontSize: "1.1rem",
        fontWeight: 500,
        color: "#54565C",
    },
    actionTabStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    actionTabContainer: {
        border: "1px solid rgba(96, 96, 96, 0.1)",
        display: "flex",
        justifyContent: "center",
        padding: 2,
        maxHeight: "40px",
        minHeight: "40px",
    },
    productProvider: { fontSize: "1.3rem", fontWeight: 500, color: "#2C3039" },
    productPartner: {
        fontSize: "1rem",
        fontWeight: 500,
        color: "#54565C",
        mt: 2,
        borderRight: "1px solid #54565C",
    },
    productStyle: {
        fontSize: "1rem",
        fontWeight: 500,
        mt: 2,
        ml: 2,
        color: "#54565C",
    },
};

const logos = {
    "prv-1a70dfd6-6464-4c32-9f52-ee413ebf37aa": Pramerica,
    NIVA_5678: NivaBupa,
};

const statusStyles = {
    Approved: { color: "#097939", backgroundColor: "#0979391A" },
    "Waiting for Admin Approval": { color: "#ED752E", backgroundColor: "#ED752E1A" },
    "On Hold": { color: "#FFA500", backgroundColor: "#FFA5001A" },
    Rejected: { color: "#FF0000", backgroundColor: "#FF00001A" },
};

const ProviderLogo = ({ providerId }) => {
    const logo = logos[providerId] || Logo;
    return <img src={logo} alt="Provider Logo" />;
};

const StatusBox = ({ status }) => {
    const style = statusStyles[status] || {};
    return (
        <Box
            sx={{
                backgroundColor: style.backgroundColor,
                borderRadius: "5px",
                padding: "5px 10px",
                color: style.color,
            }}
        >
            {status}
        </Box>
    );
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

const ActionButton = ({ icon: Icon, label, onClick }) => (
    <Grid item xs={4} sx={styles.actionTabContainer}>
        <Button sx={{ p: 0, color: "#54565C" }} onClick={onClick}>
            <Icon />
            <Typography sx={styles.buttonTextStyle}>{label}</Typography>
        </Button>
    </Grid>
);

const ProductCard = ({ item, options, isExpanded, onExpandClick }) => {
    const navigate = useNavigate();
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleEdit = () => {
        navigate("/product/create");
    };

    return (
        <Card sx={styles.cardStyle}>
            <Card>
                <Grid container>
                    <Grid item xs={12} sx={{ p: 2 }}>
                        <Grid container>
                            <Grid item xs={2}>
                                <ProviderLogo providerId={item?.providerId} />
                            </Grid>
                            <Grid item xs={6}>
                                <ProductDetails
                                    provider={item?.provider}
                                    partner={item?.partner}
                                    product={item?.name}
                                />
                            </Grid>
                            <Grid item xs={4} sx={styles.statusContainerStyle}>
                                <StatusBox status={item?.status} />
                            </Grid>
                        </Grid>
                    </Grid>
                    {isExpanded && (
                        <Grid item xs={12}>
                            <ViewProduct />
                        </Grid>
                    )}
                    <Grid item xs={12}>
                        <Grid container sx={styles.actionTabStyle}>
                            {options.includes("edit") && (
                                <ActionButton
                                    icon={EditIcon}
                                    label="Edit Product"
                                    onClick={handleEdit}
                                />
                            )}
                            {options.includes("version") && (
                                <ActionButton
                                    icon={VersionIcon}
                                    label="Version History"
                                    onClick={handleDialogOpen}
                                />
                            )}
                            {options.includes("view") && (
                                <ActionButton
                                    icon={isExpanded ? HideIcon : ViewIcon}
                                    label={
                                        isExpanded ? "Hide Product" : "View Product"
                                    }
                                    onClick={onExpandClick}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
            <Typography sx={styles.bottomTextStyle}>
                {item.status === "Rejected"
                    ? item.reason
                    : timeStampToSentence(item?.createdAt)}
            </Typography>

            <VersionHistory
                open={isDialogOpen}
                onClose={handleDialogClose}
                productId={item?.id}
            />
        </Card>
    );
};

export default ProductCard;
