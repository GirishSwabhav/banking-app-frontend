"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { login } from '@/lib/user';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
    const { CustomTextInput, CustomPasswordInput } = require('@/app/(components)/customTextInput')
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all'
    });

    const formSchema = {
        username: register('username', {
            required: 'username cannot be empty',
            minLength: {
                value: 3,
                message: 'username must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'username must be maximum 50 characters long'
            }
        }),
        password: register('password', {
            required: 'password cannot be empty',
            minLength: {
                value: 3,
                message: 'password must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'password must be maximum 50 characters long'
            }
        }),
    }

    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const loginUser = async (data) => {
        try {
            setIsSubmitting(true);
            const response = await login(data);
            localStorage.setItem('role', response.data.data.isAdmin ? 'admin' : 'user')
            localStorage.setItem('id', response.data.data.id)
            localStorage.setItem('name', response.data.data.name)
            toast.success(response.data.message ?? response.message);
            router.push('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message ?? error.message ?? 'An error occurred');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form className="flex flex-col gap-y-4 w-full" >
            <div className="flex flex-col">
                <CustomTextInput
                    label="Username"
                    type="text"
                    placeholder="Enter Username"
                    formControl={formSchema.username}
                    errors={errors?.username}
                />
            </div>
            <div className="flex flex-col">
                <CustomPasswordInput
                    label="Password"
                    placeholder="Enter Password"
                    formControl={formSchema.password}
                    errors={errors?.password}
                    showPassword={showPassword}
                    toggleShowPassword={toggleShowPassword}
                />
            </div>
            <button
                type="submit"
                className={`${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-neutral-950'} text-white rounded-md p-2 mt-3`}
                onClick={handleSubmit(loginUser)}
            >
                {isSubmitting ? 'Logging in...' : 'Log in'}
            </button>
        </form >
    )
}

export default LoginForm