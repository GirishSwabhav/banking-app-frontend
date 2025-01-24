"use client";
import React from 'react'
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    const routeTitles = {
        '/': 'Dashboard',
        '/profile': 'Account Settings',
        '/transfer': 'Transfer',
        '/transactions': 'Transactions',
        '/accounts': 'Accounts',

        '/users': 'Users',
    };

    const title = routeTitles[pathname] || 'Account';

    return (
        <header className="flex justify-between items-center mb-8">
            <h2 className="font-title text-xl font-bold">{title}</h2>
            <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neutral-700">notifications</span>
                <div className="flex items-center">
                    <img
                        src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/13"
                        alt="avatar"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                    />
                    <span className="ml-2 text-neutral-800 text-base font-medium">John Doe</span>
                </div>
            </div>
        </header>
    )
}

export default Header