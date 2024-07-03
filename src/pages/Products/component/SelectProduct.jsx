/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Slide,
    Typography,
    Radio,
    FormControlLabel,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Insurance from "../../../assets/svg/Insurance.svg";
import JLG from "../../../assets/svg/JLG.svg";
import Instant_KCC from "../../../assets/svg/Instant_KCC.svg";
import Allied from "../../../assets/svg/Allied.svg";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const getIcon = (title) => {
    switch (title) {
        case "Insurance":
            return <img src={Insurance} alt="insurance" />;
        case "JLG":
            return <img src={JLG} alt="insurance" />;
        case "Instant KCC":
            return <img src={Instant_KCC} alt="insurance" />;
        case "Allied":
            return <img src={Allied} alt="insurance" />;
        default:
            return <img src={Insurance} alt="insurance" />;
    }
};

const CustomRadio = styled(Radio)({
    color: "#DF2B87",
    "&.Mui-checked": {
        color: "#DF2B87",
    },
    "& .MuiSvgIcon-root": {
        width: 24,
        height: 24,
    },
});

const TickIcon = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="12" fill="#DF2B87" />
        <path
            d="M7 12.5L10 15.5L17 8.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CardItem = ({ title, subtext, selectedValue, handleChange }) => (
    <div>
        <Card
            elevation={selectedValue === title ? 2 : 0}
            sx={{
                border:
                    selectedValue === title
                        ? "2px solid #DF2B87"
                        : "2px solid #D1D1D1",
                margin: 2,
                padding: 0,
                paddingBottom: 0,
            }}
        >
            <CardContent
                sx={{
                    "&.MuiCardContent-root:last-child": {
                        padding: "0.5rem",
                    },
                }}
            >
                <Grid container alignItems="center">
                    <Grid item xs={2}>
                        {getIcon(title)}
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {subtext}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <CustomRadio
                            checked={selectedValue === title}
                            onChange={() => handleChange(title)}
                            value={title}
                            checkedIcon={<TickIcon />}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>
);

const SelectProduct = ({ open, onClose, onCreate }) => {
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState("");

    const handleCreate = () => {
        navigate("/product/create", { state: { product: selectedValue } });
    };

    const handleChange = (title) => {
        setSelectedValue(title);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            PaperProps={{
                sx: {
                    height: "100%",
                    maxHeight: "100%",
                    width: "40%",
                    maxWidth: "40%",
                    position: "fixed",
                    right: 0,
                    m: 0,
                },
            }}
        >
            <DialogTitle sx={{ pl: 2 }}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        <IconButton onClick={onClose}>
                            <ArrowBackIcon fontSize="small" />
                        </IconButton>
                        Create a Product
                        <Typography
                            sx={{ fontSize: "0.7rem", fontWeight: 500, pl: 5 }}
                        >
                            Choose a product from the list
                        </Typography>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container sx={{ height: "100%" }}>
                    <Grid item xs={12}>
                        {["Insurance", "JLG", "Instant KCC", "Allied"].map(
                            (title, index) => (
                                <CardItem
                                    key={index}
                                    title={title}
                                    subtext="Check data in sub text"
                                    selectedValue={selectedValue}
                                    handleChange={handleChange}
                                />
                            )
                        )}
                    </Grid>
                    <Grid item xs={12} sx={{ margin: 2, marginTop: "auto" }}>
                        <Button
                            sx={{
                                width: "100%",
                                background: "#DF2B87",
                                color: "red",
                                ":hover": {
                                    background: "#DF2B87",
                                },
                                padding: "0.6rem 1.5rem",
                                textTransform: "none",
                            }}
                            onClick={handleCreate}
                            disabled={!selectedValue}
                        >
                            <Typography> Select Product</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default SelectProduct;
