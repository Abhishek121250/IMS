/* eslint-disable no-unused-vars */
import React from "react";

import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

// import FederalLogo from '../assets/svg/FederalLogo.svg';
import HeaderPopper from "./HeaderPopper";

const toolbarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    width: "100%",
    border: "1px solid #D9D9D9",
    backgroundColor: "#ffffff",
};
const Header = () => {
    return (
        <Toolbar sx={toolbarStyle}>
            <HeaderPopper />
        </Toolbar>
    );
};

export default Header;
