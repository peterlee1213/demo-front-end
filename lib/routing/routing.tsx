import { ReactNode } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsIcon from '@mui/icons-material/Groups';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ComputerIcon from '@mui/icons-material/Computer';
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

type RouteType = {
    icon: ReactNode;
    name: string;
    /**  the url segment of current route, must be globally unique */
    path: string;
    /** if this route has children, is this route defaults to open */
    isOpen?: boolean;
    children?: RouteType[];
}

/**
 * The array which determines all the available routes and menu,
 * Two levels of nexted routes are supported at most
 */
const routes: RouteType[] = [
    {
        icon: <DeviceHubIcon></DeviceHubIcon>,
        name: "System Arch",
        path: "system-arch",
        isOpen: false,
        children: [
            {
                icon: <PersonIcon></PersonIcon>,
                name: "User Management",
                path: "user-management",
            }, {
                icon: <ApartmentIcon></ApartmentIcon>,
                name: "Dept Management",
                path: "dept-management",
            }, {
                icon: <GroupsIcon></GroupsIcon>,
                name: "Role Management",
                path: "role-management",
            }
        ]
    }, {
        icon: <BorderColorIcon></BorderColorIcon>,
        name: "Editor Task",
        path: "editor-task",
    }, {
        icon: <ComputerIcon></ComputerIcon>,
        name: "IT Task",
        path: "it-task",
    }
]

const getFilteredRoutes = (): RouteType[] => {
    return routes;
}

export type { RouteType }
export { routes, getFilteredRoutes }