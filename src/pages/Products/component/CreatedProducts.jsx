/* eslint-disable react/prop-types */
import { useState } from "react";

import { Box } from "@mui/material";

import ProductCard from "./ProductCard";

const CreatedProducts = ({ productlist }) => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    const createdProducts = productlist.filter(
        (item) => item.status === "Waiting for Admin Approval"
    );

    return (
        <Box style={{ maxHeight: "63vh", overflow: "auto" }}>
            {createdProducts.map((item, index) => (
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

export default CreatedProducts;
