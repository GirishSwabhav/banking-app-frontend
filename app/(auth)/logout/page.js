"use client"
import { logout } from '@/lib/user'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const Logout = () => {

    const router = useRouter()

    const logoutUser = async () => {
        try {
            const response = await logout();
            localStorage.clear()
            toast.success("Logout Successfull !");
            router.push('/login')
        } catch (error) {
            toast.error(error.response?.data?.message ?? error.message ?? "Unknown error occured");
        }
    }

    useEffect(() => {
        logoutUser()
    }, [])

    return (
        <div>Logout</div>
    )
}

export default Logout