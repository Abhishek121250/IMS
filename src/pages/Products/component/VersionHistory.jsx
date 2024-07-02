/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Slide,
    Typography,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const VersionHistory = ({ open, onClose, productId }) => {
    const [version, setVersion] = React.useState("all");

    const handleChange = (event) => {
        const { value } = event.target;
        setVersion(value);
    };

    const renderContent = () => {
        switch (version) {
            case "all":
                return (
                    <Typography variant="body1">
                        Showing all versions for Product ID: {productId}
                    </Typography>
                );
            case "1":
                return (
                    <Typography variant="body1">
                        Showing Version 1 for Product ID: {productId}
                    </Typography>
                );
            case "2":
                return (
                    <Typography variant="body1">
                        Showing Version 2 for Product ID: {productId}
                    </Typography>
                );
            default:
                return null;
        }
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
            <DialogTitle sx={{ pl: 2, zIndex: 1 }}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        <IconButton onClick={onClose}>
                            <ArrowBackIcon fontSize="small" />
                        </IconButton>
                        Version History
                    </Grid>
                    <Grid item sx={{ marginLeft: "auto", padding: 0 }}>
                        <select
                            id="version-select"
                            value={version}
                            onChange={handleChange}
                            style={{ minWidth: "120px", padding: "8px" }}
                        >
                            <option value="all">All Versions</option>
                            <option value="1">Version 1</option>
                            <option value="2">Version 2</option>
                        </select>
                    </Grid>
                </Grid>
            </DialogTitle>
            <DialogContent>
                <div style={{ marginTop: 10 }}>
                    <div
                        style={{
                            paddingLeft: "20px",
                            paddingTop: "35px",
                            position: "relative",
                            minHeight: "200px",
                            borderRadius: "5px",
                            boxShadow: "0 1px 8px 2px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <div
                            style={{
                                padding: "5px",
                                position: "absolute",
                                width: "80%",
                                top: -10,
                                left: "50%",
                                transform: "translateX(-50%)",
                                borderRadius: "3px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "0.7rem",
                                backgroundColor: "#FFFFFF",
                                border: "1.5px solid rgba(229, 229,229,0.5)",
                            }}
                        >
                            Header with Product ID
                        </div>

                        {renderContent()}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VersionHistory;
