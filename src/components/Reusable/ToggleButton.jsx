/* eslint-disable react/prop-types */
import { Box, Tab } from "@mui/material";

const ToggleButton = ({
    toggleData,
    selectedTab,
    border,
    handleChange,
    isIconToggle,
    selectedBgColor,
}) => {
    const getStyles = (border, isIconToggle, selectedBgColor) => ({
        outer: {
            backgroundColor: "#F6F6F6",
            border: "2px solid #D9D9D9",
            color: "#939393",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "row",
            padding: "2px",
        },
        tabContainer: {
            flex: "1",
            paddingTop: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "3px",
            margin: "1px",
            cursor: "pointer",
            height: "20px",
            color: "#939393",
            fontWeight: "600",
        },
        selectedTabContainer: {
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            elevation: 5,
            borderRadius: "3px",
            margin: "1px",
            backgroundColor: selectedBgColor,
            cursor: "pointer",
            overflow: "hidden",
            height: "20px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        },
        tab: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "none",
            fontWeight: "400",
            fontSize: "12px",
            opacity: 1,
            minWidth: isIconToggle && "fit-content",
            color: "#939393",
            "&:hover": {
                color: "none",
            },
        },
        selectedTab: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "none",
            fontWeight: "600",
            fontSize: "12px",
            opacity: 1,
            minWidth: isIconToggle && "fit-content",
            color: "#2C3039",
            backgroundColor: selectedBgColor,
        },
    });

    const handleTabClick = (index) => {
        handleChange(index);
    };

    return (
        <Box sx={getStyles(border).outer}>
            {toggleData?.map((item, idx) => (
                <Box
                    key={idx}
                    sx={
                        selectedTab === idx
                            ? getStyles(border, isIconToggle, selectedBgColor)
                                  .selectedTabContainer
                            : getStyles(border).tabContainer
                    }
                    onClick={() => handleTabClick(idx)}
                >
                    <Tab
                        label={item?.label}
                        sx={
                            selectedTab === idx
                                ? getStyles(border, isIconToggle, selectedBgColor)
                                      .selectedTab
                                : getStyles(border, isIconToggle).tab
                        }
                    />
                </Box>
            ))}
        </Box>
    );
};

export default ToggleButton;
