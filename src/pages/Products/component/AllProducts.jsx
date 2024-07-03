/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

// import useProductListAPI from "../../../store/useProductListAPI";
import ProductCard from "./ProductCard";
import { useState } from "react";

const AllProducts = ({ productlist }) => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    console.log(productlist, "check in prod");
    return (
        <Box style={{ maxHeight: `calc(100vh - 270px)`, overflow: "auto" }}>
            {productlist.map((item, index) => (
                <ProductCard
                    key={index}
                    item={item}
                    options={["edit", "version", "view"]}
                    isExpanded={expandedProductId === item.id}
                    onExpandClick={() => handleExpandClick(item.id)}
                />
            ))}
        </Box>
    );
};

export default AllProducts;
