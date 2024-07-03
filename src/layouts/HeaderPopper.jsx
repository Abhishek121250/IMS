import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import Mifix from "../assets/svg/Mifix";
import { theme } from "../theme";

const headerWrapperStyle = {
    width: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "right",
    height: "2.5rem",
};
const HeaderPopper = () => {
    const options = ["Admin", "Logout", "Titania"];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={headerWrapperStyle}>
                <Mifix />
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
                <Box
                    sx={{
                        ml: 2,
                        height: "35px",
                        width: "35px",
                        borderRadius: "50%",
                        border: `2px solid ${theme.palette.tertiary.main}`,
                        backgroundImage:
                            "url(https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp)",
                        backgroundSize: "cover",
                    }}
                ></Box>
                <IconButton
                    sx={{
                        cursor: "pointer",
                    }}
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    {open ? (
                        <KeyboardArrowUpIcon
                            sx={{
                                fontSize: 25,
                            }}
                        />
                    ) : (
                        <KeyboardArrowDownIcon
                            sx={{
                                fontSize: 25,
                            }}
                        />
                    )}
                </IconButton>
            </Box>
        </>
    );
};

export default HeaderPopper;
