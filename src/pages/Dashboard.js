
import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from '../providers/auth-context.provider';
import { useContext } from "react";
import Topbar from "../components/Global/Topbar";
import AppSidebar from "../components/Global/Sidebar";
import { tokens } from "../CollabTheme";
import { Box, Button, IconButton, Typography,useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import StatBox from "../components/UI/StatBox";

const Dashboard = () => {
    const ctxAuth = useContext(AuthContext);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    console.log(ctxAuth.user)

    return (
        <div className="app">
            <Header />
            <AppSidebar fullName={ctxAuth?.user?.fullName}/>
            <main className="content">
                <Topbar />
                <Box m="20px">
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Header title="DASHBOARD" subtitle={`Welcome to your dashboard:${ctxAuth.userId}`} />
                        <Box>
                            <Button
                                sx={{
                                backgroundColor: colors.blueAccent[700],
                                color: colors.grey[100],
                                fontSize: "14px",
                                fontWeight: "bold",
                                padding: "10px 20px",
                                }}
                            >
                                <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                                Download Reports
                            </Button>
                        </Box>
                    </Box>
                    {/* GRID & CHARTS */}
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gridAutoRows="140px"
                        gap="20px"
                    >
                        {/* ROW 1 */}
                        <Box
                            gridColumn="span 3"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <StatBox
                                title="12,361"
                                subtitle="Emails Sent"
                                progress="0.75"
                                increase="+14%"
                                icon={
                                <EmailIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                                }
                            />
                        </Box>
                        <Box
                            gridColumn="span 3"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <StatBox
                                title="431,225"
                                subtitle="Sales Obtained"
                                progress="0.50"
                                increase="+21%"
                                icon={
                                <PointOfSaleIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                                }
                            />
                        </Box>
                        {/* <Box
                            gridColumn="span 3"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <StatBox
                                title="32,441"
                                subtitle="New Clients"
                                progress="0.30"
                                increase="+5%"
                                icon={
                                <PersonAddIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                                }
                            />
                        </Box>
                        <Box
                            gridColumn="span 3"
                            backgroundColor={colors.primary[400]}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <StatBox
                                title="1,325,134"
                                subtitle="Traffic Received"
                                progress="0.80"
                                increase="+43%"
                                icon={
                                <TrafficIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                                }
                            />
                        </Box> */}
                    </Box>
                    <Outlet />
                </Box>
            </main>
        </div>
    );
}

export default Dashboard;