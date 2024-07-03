/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";

const PaymentMode = ({
    iconSrc,
    upi,
    label,
    Vector,
    description,
    isSelected,
    onSelect,
}) => {
    return (
        <div
            onClick={onSelect}
            style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                border: isSelected ? "2px solid #DF2B87" : "1px solid #d3d3d3",
                background: isSelected ? "#FFE0EC" : "#F9F9F9",
                borderRadius: "5px",
                padding: "0.6rem",
                cursor: "pointer",
            }}
        >
            <Grid sx={{ height: "45%", margin: "5px 8px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Grid item>
                        <div style={{ display: "flex" }}>
                            <div>
                                <img src={iconSrc} alt="icon" />
                            </div>
                            <div style={{ marginLeft: "0.4rem" }}>
                                {upi ? (
                                    <img src={upi} alt="upi" />
                                ) : (
                                    <>
                                        <Typography
                                            sx={{
                                                fontSize: "0.8rem",
                                                color: "#222633",
                                                textAlign: "left",
                                                marginTop: "0.3rem",
                                            }}
                                        >
                                            {label}
                                        </Typography>
                                    </>
                                )}
                            </div>
                            {/* {upi && <img src={upi} alt="upi" />} */}
                        </div>
                    </Grid>
                    <Grid item sx={{ textAlign: "end" }}>
                        <img src={Vector} alt="vector" />
                    </Grid>
                </div>
            </Grid>
            <Grid sx={{ height: "30%" }}>
                <Typography
                    sx={{
                        fontSize: "0.7rem",
                        color: "#808080",
                        mt: "0.3rem",
                        ml: 1,
                        paddingTop: "0rem",
                    }}
                >
                    {description}
                </Typography>
            </Grid>
        </div>
    );
};

export default PaymentMode;
