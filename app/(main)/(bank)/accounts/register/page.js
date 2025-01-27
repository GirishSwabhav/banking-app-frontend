"use client";
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { addAccount } from '@/lib/account';

const RegisterBank = () => {

    const { CustomTextInput } = require('@/app/(components)/customTextInput')
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
    } = useForm({ mode: 'all' })

    const registerBankFormSchema = {
        name: register('name', {
            required: 'Name cannot be empty',
            minLength: {
                value: 3,
                message: 'Name must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'Name must be maximum 50 characters long'
            }
        }),
        abbreviation: register('abbreviation', {
            required: 'Abbreviation cannot be empty',
            minLength: {
                value: 3,
                message: 'abbreviation must be at least 2 characters long'
            },
            maxLength: {
                value: 50,
                message: 'abbreviation must be maximum 50 characters long'
            }
        }),
    }

    const [isSubmitting, setIsSubmitting] = useState(false);

    const registerBank = async (data) => {
        try {
            setIsSubmitting(true)
            const response = await addBank(data)
            reset()
            toast.success(response.data.message ?? response.message)
        } catch (error) {
            toast.error(error.response?.data?.message ?? error.message ?? 'An error occurred');
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Form */}
            <form className="grid grid-cols-2 gap-8 max-w-[600px] ml-5">

                <div className="col-span-2 flex justify-center items-center gap-5">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/593/729/non_2x/vector-bank-building-icon-isolated-on-white-background.jpg"
                        alt="profile" fetchPriority="high"
                        className="w-[200px] h-[200px] rounded-full object-cover"
                    />
                </div>


                <div className="col-span-2">
                    <CustomTextInput
                        label="Name"
                        type="text"
                        placeholder="State Bank"
                        formControl={registerBankFormSchema.name}
                        errors={errors?.name}
                    />
                </div>

                <div className="col-span-2">
                    <CustomTextInput
                        label="Abbreviation"
                        type="text"
                        placeholder="SBI"
                        formControl={registerBankFormSchema.abbreviation}
                        errors={errors?.abbreviation}
                    />
                </div>

                <div className="col-span-2 mt-4">
                    <button
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded-md"
                        onClick={handleSubmit(registerBank)}
                    >
                        {isSubmitting ? "Registering New Bank..." : "Register"}
                    </button>
                </div>

            </form>
        </>
    )
}

export default RegisterBank