import React from 'react'
import Image from 'next/image'
import LoginForm from './login-form';

const Home = () => {
    return (
        <>
            <div className="w-screen h-screen bg-slate-50 flex">
                <div className="w-2/4 h-screen bg-slate-950 flex flex-col justify-center items-center">
                    <Image src="/images/bg-home.png" alt="hero" width={400} height={100} />
                    <h1 className="text-3xl font-bold text-slate-200">Maxus is personal finance,</h1>
                    <h1 className="text-3xl font-bold text-slate-200">made simple</h1>
                    <p className="text-sm mt-3 text-slate-200">All your accounts and savings in one place</p>
                </div>
                <div className="w-2/4 h-screen">
                    <div className="h-1/5 flex flex-col justify-center items-end pr-14">
                        <h1 className="text-2xl font-bold text-black inline">Maxus</h1>
                        <p className="text-sm text-black">Online Banking</p>
                    </div>
                    <div className="h-4/5 flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-center items-start w-2/5 mt-16">
                            <h2 className="text-neutral-950 font-title text-3xl font-bold mb-6">
                                Log in
                            </h2>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home