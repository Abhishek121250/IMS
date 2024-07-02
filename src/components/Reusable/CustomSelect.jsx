/* eslint-disable react/prop-types */
// import React from "react";
import {
    FormControl,
    Select,
    MenuItem,
    Typography as MuiTypography,
} from "@mui/material";

const CustomSelect = ({ menuItems, typographyProps, ...props }) => {
    return (
        <FormControl
            sx={{
                paddingRight: 3,
                marginLeft: 2,
                minWidth: 120,
                width: 250,
                "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "& .MuiSelect-select": {
                        padding: "10px",
                        fontSize: "14px",
                    },
                },
                "& .MuiInputLabel-root": {
                    fontSize: "14px",
                },
                ...props.sx,
            }}
        >
            {typographyProps && <MuiTypography {...typographyProps} />}
            <Select {...props}>
                {menuItems.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
