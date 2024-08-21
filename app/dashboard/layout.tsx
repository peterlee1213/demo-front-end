"use client"

import type { ReactNode } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Breadcrumbs, Collapse, IconButton, Link } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { getFilteredRoutes } from "@/lib/routing/routing";
import { useRouter } from "next/navigation";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 280;

interface Props {
    readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    const router = useRouter();
    const [routes, setRoutes] = React.useState(getFilteredRoutes());
    const [activeRoute, setActiveRoute] = React.useState("");

    React.useEffect(() => {
        const pathname = window.location.pathname.split("/");
        setActiveRoute(pathname[pathname.length - 1]);
    }, [window.location.pathname])

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar className="flex justify-between">
                    <div className="flex items-center gap-1 cursor-pointer select-none" onClick={() => router.push("/dashboard")}>
                        <DashboardIcon></DashboardIcon>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </div>

                    <div className="flex gap-4">
                        <IconButton>
                            <NotificationsIcon className="text-white"></NotificationsIcon>
                        </IconButton>
                        <IconButton>
                            <AccountCircleIcon className="text-white"></AccountCircleIcon>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {
                            routes.map((route, index) => (
                                <ListItem className="block" key={route.path} disablePadding onClick={() => {
                                    if (route.children) {
                                        let newRoutes = routes.concat([]);
                                        newRoutes[index].isOpen = !newRoutes[index].isOpen;
                                        setRoutes(newRoutes);
                                    }
                                    else router.push("/dashboard/" + route.path);
                                }}>
                                    <ListItemButton className={activeRoute == route.path ? "bg-gray-400" : ""}>
                                        <ListItemIcon>{route.icon}</ListItemIcon>
                                        <ListItemText primary={route.name} />
                                        {route.children && route.isOpen && <ExpandLess />}
                                        {route.children && !route.isOpen && <ExpandMore />}
                                    </ListItemButton>
                                    {route.children &&
                                        (<Collapse in={route.isOpen} timeout="auto">
                                            <List component="div" disablePadding>
                                                {
                                                    route.children.map((childRoute, index) => (
                                                        <ListItem key={childRoute.path} disablePadding
                                                            onClick={() => {
                                                                router.push("/dashboard/" + route.path + "/" + childRoute.path);
                                                            }}
                                                        >
                                                            <ListItemButton className={activeRoute == childRoute.path ? "bg-gray-400" : ""}>
                                                                <ListItemIcon className="ml-4">{childRoute.icon}</ListItemIcon>
                                                                <ListItemText primary={childRoute.name} />
                                                            </ListItemButton>

                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                        </Collapse>)}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}