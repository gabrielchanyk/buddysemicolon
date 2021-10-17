import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        url: "/home"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon />,
        url: "/profile"
    },
    {
        title: "Logout",
        icon: <Logout />,
        url: "/logout"
    }
]

