import React from 'react';
import { useForm, FormProvider, useFormStatus } from 'react-hook-form';

const SubmitButton = () => {
    const { isSubmitting } = useFormStatus(); // Access form submission status

    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full p-2 rounded-md text-white ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
                }`}
        >
            {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
    );
};

const LoginForm = () => {
    const methods = useForm();

    const onSubmit = async (data) => {
        console.log('Form Submitted:', data);
        // Simulate a delay for the submission process
        await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-md mx-auto p-4">
                {/* Username Field */}
                <div className="mb-4">
                    <label htmlFor="username" className="text-neutral-950 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 mt-3 w-full"
                        placeholder="Enter your username"
                        {...methods.register('username', {
                            required: 'Username is required',
                            minLength: {
                                value: 3,
                                message: 'Username must be at least 3 characters long',
                            },
                        })}
                    />
                    {methods.formState.errors?.username && (
                        <p className="text-red-500 text-sm mt-1">
                            {methods.formState.errors.username.message}
                        </p>
                    )}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="text-neutral-950 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="border border-neutral-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary-500 mt-3 w-full"
                        placeholder="Enter your password"
                        {...methods.register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long',
                            },
                        })}
                    />
                    {methods.formState.errors?.password && (
                        <p className="text-red-500 text-sm mt-1">
                            {methods.formState.errors.password.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <SubmitButton />
            </form>
        </FormProvider>
    );
};

export default LoginForm;
