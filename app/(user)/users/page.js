import React from 'react'
import Pagination from '@mui/material/Pagination';

const Users = () => {
    return (
        <>
            <div className="flex flex-col justify-between items-center w-full h-full">

                {/* Pagination */}
                <div className="w-full h-[35px] bg-slate-50 flex flex-row justify-between items-center mb-5">
                    <h1 className="text-xl font-bold">Total Users: 100</h1>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                    <div className="w-[500px] bg-white shadow rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-neutral-950 text-2xl font-semibold">John Doe</h2>
                                <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                    @john.doe3
                                </span>

                                <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                    <dt className="text-neutral-500">Phone No:</dt>
                                    <dd className="text-neutral-950 italic text-right">+91 9145753694</dd>
                                    <dt className="text-neutral-500">Accounts:</dt>
                                    <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                </dl>
                            </div>
                            <img
                                src="https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/7"
                                alt="avatar"
                                className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Users