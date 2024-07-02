/* eslint-disable no-unused-vars */
import React from "react";

import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

// import FederalLogo from '../assets/svg/FederalLogo.svg';
import HeaderPopper from "./HeaderPopper";

const toolbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  border: "1px solid #D9D9D9",
};
const Header = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <Typography variant="h5">Client Summary</Typography>
      <HeaderPopper />
    </Toolbar>
  );
};

export default Header;
