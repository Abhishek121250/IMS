import { useState } from "react";

import { Box } from "@mui/material";

import data from "../../../data";
import ProductCard from "./ProductCard";

const ApprovedProducts = () => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };
    const approvedProducts = data.filter((item) => item.status === "Approved");

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
