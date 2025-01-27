"use client"
import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

const navItems = [
    {
        label: "Dashboard",
        icon: <HomeIcon />,
        link: "/dashboard",
        roles: ["admin", "user"],
    },
    {
        label: "Users",
        icon: <PeopleAltIcon />,
        link: "/users",
        roles: ["admin"],
    },
    {
        label: "Banks",
        icon: <AccountBalanceIcon />,
        link: "/banks",
        roles: ["admin"],
    },
    {
        label: "Transfer",
        icon: <ReplyIcon />,
        link: "/transfer",
        roles: ["user"],
    },
    {
        label: "Transactions",
        icon: <SendIcon fontSize='small' />,
        link: "/transactions",
        roles: ["user"],
    },
    {
        label: "Accounts",
        icon: <CreditCardIcon />,
        link: "/accounts",
        roles: ["user"],
    }
];

const accountItems = [
    {
        label: "Settings",
        icon: <ManageAccountsIcon />,
        link: "/profile"
    },
    {
        label: "Logout",
        icon: <LogoutIcon />,
        link: "/logout"
    }
]

const NavBar = () => {

    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const role = localStorage.getItem('role')
        setUserRole(role)
    })

    const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

    return (
        <nav className="bg-gray-200 w-1/5 h-full flex flex-col items-start justify-between pl-14 pt-10 pb-14">
            <div>
                <h1 className="text-3xl text-black font-semibold mb-10">Maxus</h1>
                <ul className="space-y-7">
                    {filteredNavItems.map((item, index) => {
                        return (
                            <li className="flex items-center text-neutral-600 font-medium text-sm" key={index}>
                                <a href={item.link || ""} className="flex items-center space-x-3 hover:text-neutral-950 transition-colors">
                                    <span className="mr-2">{item.icon}</span>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul className="space-y-7">
                    {accountItems.map((item, index) => {
                        return (
                            <li className="flex items-center text-neutral-600 font-medium text-sm" key={index + navItems.length}>
                                <a href={item.link || ""} className="flex items-center space-x-3 hover:text-neutral-950 transition-colors">
                                    <span className="mr-2">{item.icon}</span>
                                    {item.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav >
    )
}

export default NavBar
