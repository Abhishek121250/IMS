import { Box, Button, Typography } from "@mui/material";
import abc from "../../../assets/svg/abc.svg";
import { useNavigate } from "react-router-dom";

const CreateProductContainer = () => {
    const navigate = useNavigate();

    const handleCreateProductClick = () => {
        navigate("/product/create");
    };
    return (
        <Box
            sx={{
                background: "#FAFAFA",
                width: "35%",
                display: "flex",
                border: "1px solid #D8D5D5",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Box>
                <img src={abc} style={{ width: "90%", marginLeft: "1rem" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ textAlign: "center", color: "#322B42" }}>
                    Welcome,
                    <br />
                    Start creating a product{" "}
                </Typography>
            </Box>
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
                        background: "#DF2B87",
                        color: "white",
                        ":hover": {
                            background: "#DF2B87",
                        },
                        padding: "0.6rem 1.5rem",
                    }}
                    onClick={handleCreateProductClick}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#FFFFFF",
                        }}
                    >
                        Create Product
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default CreateProductContainer;
