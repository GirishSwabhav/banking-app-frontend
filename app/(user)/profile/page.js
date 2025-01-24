'use client';
import React from "react";

const Account = () => {
    return (
        <>
            {/* Tabs */}
            <nav className="flex items-center border-b border-neutral-300 mb-10">
                <button className="py-2 pl-2 pr-10 text-sm font-semibold text-neutral-500 hover:text-neutral-950 transition-colors">Personal info</button>
                <button className="py-2 pl-2 pr-10 text-sm font-semibold text-neutral-500 hover:text-neutral-950 transition-colors">Password and security</button>
            </nav>

            {/* Form */}
            <form className="grid grid-cols-2 gap-8 max-w-[600px] ml-0">

                <div className="col-span-2 flex items-center gap-5">
                    <img
                        src="https://tools-api.webcrumbs.org/image-placeholder/100/100/avatars/13"
                        alt="profile"
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                    {/* <button type="button" className="px-6 py-2 bg-black text-white rounded-md">Edit</button> */}
                </div>

                <div>
                    <label className="block mb-2 text-neutral-700">First name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        placeholder="John"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-neutral-700">Last name</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        placeholder="Doe"
                    />
                </div>
                {/* <div className="col-span-2">
                        <label className="block mb-2 text-neutral-700">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                            placeholder="john@example.com"
                        />
                    </div> */}
                <div className="col-span-2">
                    <label className="block mb-2 text-neutral-700">Phone number</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                        placeholder="1111 222 333"
                    />
                </div>
                <div className="col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded-md"
                    >
                        Save changes
                    </button>
                </div>
            </form>

        </>
    )
}

export default Account;
