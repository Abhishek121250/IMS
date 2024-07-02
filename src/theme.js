/* eslint-disable no-unused-vars */
import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import colors from "./assets/scss/theme-variables.module.scss";

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primaryMain,
            contrastText: colors.tertiaryMain,
        },
        secondary: {
            main: colors.secondaryMain,
            contrastText: colors.secondaryContrastText,
        },
        tertiary: {
            main: colors.tertiaryMain,
            light: colors.tertiaryLight,
            dark: colors.tertiaryDark,
            extraDark: colors.tertiaryExtraDark,
        },
        info: {
            main: colors.infoMain,
            dark: colors.infoDark,
        },
        error: {
            main: colors.errorMain,
        },
        success: {
            main: colors.successMain,
        },
        // background: {
        //   default: colors.appBackgroundColor,
        // },
    },
    typography: {
        fontSize: 16,
        fontWeight: 800,
        color: "red",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        background: colors.disableButtonBgColor,
                        color: colors.disableButtonColor,
                        borderColor: colors.disableButtonBgColor,
                        cursor: "no-drop",
                        pointerEvents: "auto",
                    },
                    "&.Mui-disabled:hover": {
                        background: colors.disableButtonBgColor,
                        color: colors.disableButtonColor,
                    },
                },
            },
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: colors.tertiaryMain,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.primaryMain,
                    borderRadius: "4px",
                    color: colors.tertiaryMain,
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: colors.tertiaryMain,
                    fontSize: 14,
                    fontWeight: 500,
                },
            },
            variants: [
                {
                    props: { variant: "h5" },
                    style: {
                        fontSize: "1.5rem",
                        fontWeight: 600,
                        color: colors.tertiaryMain,
                        lineHeight: "1.438rem",
                    },
                },
            ],
        },
    },
});

export { theme };
