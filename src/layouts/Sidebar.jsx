/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import DashboardIcon from "../assets/svg/DashboardIcon";
import MenuItemTwo from "../assets/svg/MenuItemTwo";
import SheComLogo from "../assets/svg/SheComLogo";
import { theme } from "../theme";

const sideMenuItems = [
  {
    icon: <DashboardIcon />,
    path: "/product/list",
    title: "Product List",
  },
  {
    icon: <MenuItemTwo />,
    path: "/reports",
    title: "Client Summary",
  },
];

const Sidebar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box className="sidebar-wrapper" style={{ color: "red" }}>
      <Box sx={{ p: 1, pt: 2, pl: 1.5 }}>
        <SheComLogo />
      </Box>
      <Box sx={{ pt: 2 }}>
        {sideMenuItems?.map((item, idx) => {
          const isActive = location?.pathname.includes(item?.path);
          return (
            <Box
              key={idx}
              sx={{
                cursor: "pointer",
                borderLeft: `3px solid ${
                  isActive
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main
                }`,
                background: isActive
                  ? theme.palette.background.default
                  : "none",
                width: "100%",
                padding: "1.2rem 1.5rem",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => navigate(item?.path)}
            >
              {React.cloneElement(item.icon, {
                fill: isActive ? "#DF2B87" : "#BCBCBC",
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
