"use client";
import React, { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import { getUsers } from '@/lib/user';
import toast from 'react-hot-toast';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import randomNumbers from '@/utils/helper';

const Users = () => {

    const [users, setUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const rowsPerPageOptions = [5, 10, 15, 20]

    const router = useRouter()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const params = {
                    page: page + 1,
                    limit: rowsPerPage
                }
                const response = await getUsers(params)
                setUsers(response.data.data)
                setTotalUsers(response.data.count)
            } catch (error) {
                toast.error(error.response?.data?.message ?? error.message ?? "Failed to fetch users");
                console.log(error)
            }
        }

        if (typeof window !== 'undefined') {
            fetchUsers();
        }
    }, [page, rowsPerPage]);

    return (
        <>
            <div className="flex flex-col justify-start items-center w-full h-full">

                {/* Pagination */}
                <div className="w-full h-[35px] bg-slate-50 flex flex-row justify-between items-center mb-5">
                    <div className="flex justify-start items-center">
                        <h1 className="text-xl text-slate-600 italic font-bold">Total Users: {totalUsers}</h1>
                        <Button className="ml-8" onClick={() => router.push("/users/register")} variant="contained" size="medium" startIcon={<AddIcon />}> Register User</Button>
                    </div>
                    <TablePagination
                        component="div"
                        className="text-slate-600"
                        count={totalUsers}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={rowsPerPageOptions}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>

                {/* User Card */}
                <div className="grid grid-cols-2 gap-12 mb-6 py-6">

                    {users.map((user, index) => (
                        <div className="w-[500px] bg-white shadow-md rounded-lg p-4 hover:shadow-slate-600 hover:cursor-pointer hover:scale-105" key={index}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-neutral-950 text-2xl font-semibold">{user.firstName + " " + user.lastName}</h2>
                                    <span className="text-sm bg-slate-100 text-slate-500 italic px-2 py-1 rounded-3xl mt-1 inline-block">
                                        @{user.username}
                                    </span>

                                    <dl className="mt-4 grid grid-cols-2 text-sm gap-y-2">
                                        <dt className="text-neutral-500">Phone No:</dt>
                                        <dd className="text-neutral-950 italic text-right">{user.phoneNumber}</dd>
                                        <dt className="text-neutral-500">Accounts:</dt>
                                        <dd className="text-neutral-950 italic text-right">No Accounts</dd>
                                    </dl>
                                </div>
                                <img
                                    src={`https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/${randomNumbers()}`}
                                    alt="avatar" fetchPriority='high'
                                    className="w-[70px] h-[70px] rounded-full object-contain mr-8"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default Users