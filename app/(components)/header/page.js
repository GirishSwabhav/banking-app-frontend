"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {

    const pathname = usePathname();
    const [name, setName] = useState(null);
    useEffect(() => {
        const username = localStorage.getItem('name')
        setName(username)
    })

    const routeTitles = {
        '/dashboard': 'Dashboard',
        '/profile': 'Account Settings',
        '/transfer': 'Transfer',
        '/transactions': 'Transactions',
        '/accounts': 'Accounts',
        '/accounts/register': 'Create New Account',

        '/users': 'Users',
        '/users/register': 'Register New User',
        '/banks': 'Banks',
        '/banks/register': 'Register New Bank',
    };

    const title = routeTitles[pathname] || 'Account';

    return (
        <header className="flex justify-between items-center mb-8">
            <h2 className="font-title text-3xl font-bold">{title}</h2>
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neutral-700"><NotificationsIcon className="cursor-pointer text-black" /></span>
                <div className="flex items-center">
                    <img
                        src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/13"
                        alt="avatar" fetchPriority='high'
                        className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                    <span className="ml-2 text-neutral-800 text-base font-medium">{name}</span>
                </div>
            </div>
        </header>
    )
}

export default Header