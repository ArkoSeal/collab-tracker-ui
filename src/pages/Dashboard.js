
import * as React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import { AuthContext } from '../providers/auth-context.provider';
import { useContext } from "react";
import Topbar from "../components/Global/Topbar";
import AppSidebar from "../components/Global/Sidebar";

const Dashboard = () => {
    const ctxAuth = useContext(AuthContext);
    
    console.log(ctxAuth.user)

    return (
        <div className="app">
            {/* <HeaderComponent /> */}
            <AppSidebar fullName={ctxAuth?.user?.fullName}/>
            <main className="content">
                <Topbar />
                <div>Welcome {ctxAuth.userId}</div>
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;