import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const BaseLayout = () => {
    return (
        <div className="app-container">
            <>
                <div className="header">
                    <Header />
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </>
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};
export default BaseLayout;
