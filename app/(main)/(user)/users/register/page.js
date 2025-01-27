"use client";
import React, { useEffect, useState } from 'react'
import randomNumbers from '@/utils/helper'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { addUser } from '@/lib/user';

const Register = () => {

    const { CustomTextInput, CustomPasswordInput } = require('@/app/(components)/customTextInput')
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({ mode: 'all' })

    const registerFormSchema = {
        firstName: register('firstName', {
            required: 'First name cannot be empty',
            minLength: {
                value: 3,
                message: 'First name must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'First name must be maximum 50 characters long'
            }
        }),
        lastName: register('lastName', {
            required: 'Last name cannot be empty',
            minLength: {
                value: 3,
                message: 'Last name must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'Last name must be maximum 50 characters long'
            }
        }),
        username: register('username', {
            required: 'Username cannot be empty',
            minLength: {
                value: 3,
                message: 'Username must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'Username must be maximum 50 characters long'
            }
        }),
        password: register('password', {
            required: 'Password cannot be empty',
            minLength: {
                value: 3,
                message: 'Password must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'Password must be maximum 50 characters long'
            }
        }),
        confirmPassword: register('confirmPassword', {
            required: 'Password cannot be empty',
            validate: (value) => {
                const password = getValues('password')
                if (password !== value) {
                    return 'Passwords do not match'
                }
                return true
            }
        }),
        phoneNumber: register('phoneNumber', {
            required: 'Phone number cannot be empty',
            pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be exactly 10 digits'
            }
        })
    }

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const registerUser = async (data) => {
        try {
            setIsSubmitting(true)
            const response = await addUser(data)
            reset()
            toast.success(response.data.message ?? response.message)
        } catch (error) {
            toast.error(error.response?.data?.message ?? error.message ?? 'An error occurred');
        } finally {
            setIsSubmitting(false)
        }
    }

    const [profilePicNum, setProfilePicNum] = useState(7)
    useEffect(() => {
        setProfilePicNum(randomNumbers())
    }, [])

    return (
        <>
            {/* Form */}
            <form className="grid grid-cols-2 gap-8 max-w-[600px] ml-0">

                <div className="col-span-2 flex items-center gap-5">
                    <img
                        src={`https://tools-api.webcrumbs.org/image-placeholder/100/100/avatars/${profilePicNum}`}
                        alt="profile" fetchPriority="high"
                        className="w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>


                <CustomTextInput
                    label="First Name"
                    type="text"
                    placeholder="John"
                    formControl={registerFormSchema.firstName}
                    errors={errors?.firstName}
                />

                <CustomTextInput
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    formControl={registerFormSchema.lastName}
                    errors={errors?.lastName}
                />

                <div className="col-span-2">
                    <CustomTextInput
                        label="Phone Number"
                        type="tel"
                        placeholder="986 9568 236"
                        formControl={registerFormSchema.phoneNumber}
                        errors={errors?.phoneNumber}
                    />
                </div>

                <div className="col-span-2">
                    <CustomTextInput
                        label="Username"
                        type="text"
                        placeholder="john.doe123"
                        formControl={registerFormSchema.username}
                        errors={errors?.username}
                    />
                </div>

                <div className="col-span-2 relative">
                    <CustomPasswordInput
                        label="Password"
                        placeholder="*******"
                        formControl={registerFormSchema.password}
                        errors={errors?.password}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                    />
                </div>

                <div className="col-span-2 relative">
                    <CustomPasswordInput
                        label="Confirm Password"
                        placeholder="*******"
                        formControl={registerFormSchema.confirmPassword}
                        errors={errors?.confirmPassword}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                    />
                </div>

                <div className="col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded-md"
                        onClick={handleSubmit(registerUser)}
                    >
                        {isSubmitting ? "Registering New User..." : "Register"}
                    </button>
                </div>
            </form >
        </>
    )
}

export default Register