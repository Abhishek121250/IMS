import { useState } from "react";

import { Box } from "@mui/material";

import data from "../../../data";
import ProductCard from "./ProductCard";

const RejectedProducts = () => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    const rejectedProducts = data.filter((item) => item.status === "Rejected");

    return (
        <Box style={{ maxHeight: "63vh", overflow: "auto" }}>
            {rejectedProducts.map((item, index) => (
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

export default RejectedProducts;
