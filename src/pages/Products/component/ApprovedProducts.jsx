/* eslint-disable react/prop-types */
import { useState } from "react";

import { Box } from "@mui/material";

import ProductCard from "./ProductCard";

const ApprovedProducts = ({ productlist }) => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    const approvedProducts = productlist.filter(
        (item) => item.status === "Approved"
    );

    return (
        <Box style={{ maxHeight: "63vh", overflow: "auto" }}>
            {approvedProducts.map((item, index) => (
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

export default ApprovedProducts;
