import { Box, Button, Grid, Typography } from "@mui/material";
import BreadCrumb from "../../../components/Reusable/BreadCrumb";
import CreateProductContainer from "../component/CreateProductContainer";
import useGetProductList from "../../../store/useGetProductList";
import ProductListDashboard from "../component/ProductListDashboard";
import SelectProduct from "../component/SelectProduct";
import { useState } from "react";

const ProductContainer = () => {
    const data = useGetProductList();
    console.log(data?.data?.data?.data?.results);

    const productlist = data?.data?.data?.data?.results;
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <div style={{ padding: 0 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid
                        container
                        sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Grid item xs={4}>
                            <BreadCrumb
                                title="Product List"
                                breadcrumbs={["Home", "Products"]}
                            />
                        </Grid>
                        {productlist?.length > 0 && (
                            <Grid item xs={2}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
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
                                        onClick={handleDialogOpen}
                                    >
                                        <Typography> + Create Product</Typography>
                                    </Button>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            height: "64vh",
                            marginTop: "1rem",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {productlist?.length ? (
                            <ProductListDashboard productlist={productlist} />
                        ) : (
                            <CreateProductContainer />
                        )}
                    </Box>
                </Grid>
            </Grid>
            <SelectProduct open={isDialogOpen} onClose={handleDialogClose} />
        </div>
    );
};

export default ProductContainer;
