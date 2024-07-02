import { Box, Grid } from "@mui/material";
import BreadCrumb from "../../../components/Reusable/BreadCrumb";
import CreateProductContainer from "../component/CreateProductContainer";
import data from "../../../data";
import ProductListDashboard from "../component/ProductListDashboard";

const ProductContainer = () => {
    return (
        <div style={{ padding: 0 }}>
            <Grid container>
                <Grid item xs={12}>
                    <BreadCrumb
                        title="Product List"
                        breadcrumbs={["Home", "Products"]}
                    />
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
                        {data?.length ? (
                            <ProductListDashboard />
                        ) : (
                            <CreateProductContainer />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductContainer;
