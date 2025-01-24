import React from 'react'

const navItems = [
    {
        label: "Dashboard",
        icon: "home",
        link: "/user",
        roles: ["admin", "user"],
    },
    {
        label: "Users",
        icon: "receipt_long",
        link: "/user/users",
        roles: ["admin"],
    },
    {
        label: "Banks",
        icon: "receipt_long",
        link: "/user/banks",
        roles: ["admin"],
    },
    {
        label: "Transfer",
        icon: "swap_horiz",
        link: "/user/transfer",
        roles: ["user"],
    },
    {
        label: "Transactions",
        icon: "receipt_long",
        link: "/user/transactions",
        roles: ["user"],
    },
    {
        label: "Accounts",
        icon: "receipt_long",
        link: "/user/accounts",
        roles: ["user"],
    }
];

const accountItems = [
    {
        label: "Settings",
        icon: "credit_card",
        link: "/user/profile"
    },
    {
        label: "Logout",
        icon: "trending_up",
        link: "/logout"
    }
]

const NavBar = () => {
    const userRole = "admin";
    const filteredNavItems = navItems.filter(item => item.roles.includes(userRole));

    return (
        <nav className="bg-gray-200 w-1/5 h-full flex flex-col items-start justify-between pl-14 pt-10 pb-14">
            <div>
                <h1 className="text-2xl text-black font-medium mb-10">Maxus</h1>
                <ul className="space-y-7">
                    {filteredNavItems.map((item, index) => {
                        return (
                            <li className="flex items-center text-neutral-600 font-medium text-sm" key={index}>
                                <a href={item.link || ""} className="flex items-center space-x-3 hover:text-neutral-950 transition-colors">
                                    <span className="material-symbols-outlined mr-3">home</span>
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
                                <a href={item.href || ""} className="flex items-center space-x-3 hover:text-neutral-950 transition-colors">
                                    <span className="material-symbols-outlined mr-3">home</span>
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
