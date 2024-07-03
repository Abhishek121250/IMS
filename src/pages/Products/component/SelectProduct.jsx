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

const cardData = [
    { title: "Insurance", subtext: "Credit Life Insurance, Hospicash" },
    { title: "JLG", subtext: "Joint Liability Groups" },
    { title: "Instant KCC", subtext: "Agriculture based loans" },
    { title: "Allied", subtext: "Milk society based loans" },
];

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

const CustomRadio = styled(Radio)(({ theme }) => ({
    color: "#939393",
    "&.Mui-checked": {
        color: "#DF2B87",
    },
    "& .MuiSvgIcon-root": {
        width: 24,
        height: 24,
    },
}));

const TickIcon = ({ color }) => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="12" fill={color} />
        <path
            d="M7 12.5L10 15.5L17 8.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const StyledCard = styled(Card)(({ theme, selected }) => ({
    border: selected ? "2px solid #DF2B87" : "2px solid #D1D1D1",
    marginBottom: "20px",
    padding: 0,
    paddingBottom: 0,
    elevation: selected ? 4 : 0,
}));

const StyledCardContent = styled(CardContent)({
    "&.MuiCardContent-root:last-child": {
        padding: "0.5rem",
    },
});

const CardItem = ({ title, subtext, selectedValue, handleChange }) => (
    <StyledCard selected={selectedValue === title}>
        <StyledCardContent>
            <Grid container alignItems="center">
                <Grid item xs={2}>
                    {getIcon(title)}
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        sx={{ fontSize: "16px", fontWeight: 550, color: "#2C3039" }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{ fontSize: "12px", fontWeight: 400, color: "#54565C" }}
                    >
                        {subtext}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <CustomRadio
                        checked={selectedValue === title}
                        onChange={() => handleChange(title)}
                        value={title}
                        icon={<TickIcon color="#939393" />}
                        checkedIcon={<TickIcon color="#DF2B87" />}
                    />
                </Grid>
            </Grid>
        </StyledCardContent>
    </StyledCard>
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
                    width: "500px",
                    maxWidth: "500px",
                    position: "fixed",
                    right: 0,
                    m: 0,
                },
            }}
        >
            <DialogTitle sx={{ pl: 2, border: "1px solid #D9D9D9" }}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        <Grid container>
                            <Grid
                                item
                                xs={1}
                                sx={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "right",
                                }}
                            >
                                <IconButton onClick={onClose}>
                                    <ArrowBackIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                            <Grid
                                item
                                xs={10}
                                sx={{
                                    display: "flex",
                                    justifyContent: "left",
                                    alignItems: "right",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        p: 1,
                                        color: "#322B42",
                                    }}
                                >
                                    Create a Product
                                </Typography>
                            </Grid>

                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    pl: 5,
                                    color: "#707070",
                                }}
                            >
                                Choose a product from the list
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <Grid container sx={{ height: "100%" }}>
                    <Grid item xs={12} sx={{ margin: 2 }}>
                        {cardData.map((item, index) => (
                            <CardItem
                                key={index}
                                title={item.title}
                                subtext={item.subtext}
                                selectedValue={selectedValue}
                                handleChange={handleChange}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={12} sx={{ margin: 2, marginTop: "auto" }}>
                        <Button
                            sx={{
                                width: "100%",
                                background: "#DF2B87",
                                ":hover": {
                                    background: "#DF2B87",
                                },
                                padding: "0.6rem 1.5rem",
                                textTransform: "none",
                            }}
                            onClick={handleCreate}
                            disabled={!selectedValue}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    color: "#FFFFFF",
                                }}
                            >
                                Select Product
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default SelectProduct;
