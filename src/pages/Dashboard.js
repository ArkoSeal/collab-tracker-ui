
import * as React from "react";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import { AuthContext } from '../providers/auth-context.provider';
import { useContext } from "react";

const Dashboard = () => {
    const ctxAuth = useContext(AuthContext);
    
    console.log(ctxAuth.user)

    return (
        <>
            <HeaderComponent />
            <div>Welcome {ctxAuth.userId}</div>
            <div>logged in?: {`${ctxAuth.user.fullName}`}</div>
            <Outlet />
        </>
    );
}

export default Dashboard;