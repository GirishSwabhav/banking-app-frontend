"use client";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { login } from '@/lib/user';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
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
            toast.success(response.message);
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
                <label htmlFor="account" className="text-neutral-950 mb-1">
                    Username
                </label>
                <input
                    type="text"
                    id="account"
                    className={`border ${errors?.username ? 'border-red-500' : 'border-neutral-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 mt-3`}
                    placeholder="john.doe3"
                    {...formSchema.username}
                    required
                />
                {errors?.username && (
                    <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-neutral-950 mb-1">
                    Password
                </label>
                <div className="relative flex flex-col">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className={`border ${errors?.password ? 'border-red-500' : 'border-neutral-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 mt-3`}
                        placeholder="********"
                        {...formSchema.password}
                        required
                    />
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute right-2 bottom-2 text-black"
                    >Toggle
                    </button>
                </div>
                {errors?.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
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