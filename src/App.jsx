import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { StrictMode } from "react";
import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { theme } from "./theme";
import { routes } from "./router";
import "./assets/scss/style.scss";
const queryClient = new QueryClient();
const router = createBrowserRouter(routes);

function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    {/* <Counter /> */}
                    <CssBaseline />
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
}

export default App;
