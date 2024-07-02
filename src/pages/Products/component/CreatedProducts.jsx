import { useState } from "react";

import { Box } from "@mui/material";

import data from "../../../data";
import ProductCard from "./ProductCard";

const CreatedProducts = () => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    const createdProducts = data.filter(
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
