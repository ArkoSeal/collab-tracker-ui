
import * as React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";

const Dashboard = () => {
    
    return (
        <>
            <HeaderComponent />
            <div>Dashboard</div>
            <Outlet />
        </>
    );
}

export default Dashboard;