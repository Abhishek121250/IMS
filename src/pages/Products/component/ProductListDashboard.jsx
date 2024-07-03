/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

import ProductFlow from "./ProductFlow";
import ProductList from "./ProductList";
import QuickOverview from "./QuickOverview";

const ProductListDashboard = ({ productlist }) => {
    return (
        <Grid container spacin={1}>
            <Grid item xs={4.5}>
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                        <QuickOverview />
                    </Grid>
                    <Grid item xs={12}>
                        <ProductFlow />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={7.5}>
                <ProductList productlist={productlist} />
            </Grid>
        </Grid>
    );
};

export default ProductListDashboard;
