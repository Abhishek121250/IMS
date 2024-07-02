import { Box } from "@mui/material";

import data from "../../../data";
import ProductCard from "./ProductCard";
import { useState } from "react";

const AllProducts = () => {
    const [expandedProductId, setExpandedProductId] = useState(null);

    const handleExpandClick = (productId) => {
        setExpandedProductId(expandedProductId === productId ? null : productId);
    };

    return (
        <Box style={{ maxHeight: "60vh", overflow: "auto" }}>
            {data.map((item, index) => (
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
