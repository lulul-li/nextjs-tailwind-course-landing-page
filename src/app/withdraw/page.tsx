'use client'

import Link from 'next/link';
import React, {useState} from 'react';
import { toast } from 'react-hot-toast';
import {Navbar} from "../../components";
import {Select, Option, Input} from "@material-tailwind/react";



const Withdraw = () => {
    const [value, setValue] = useState("react");
    const [amount, setAmount] = useState('');
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e?.target?.name?.value;
        const email = e?.target?.email?.value;
        const password = e?.target?.password?.value;
        const confirmPassword = e?.target?.confirmPassword?.value;

        if(password !== confirmPassword){
            return toast.error("Password did not match, try again!")
        }



    }

    return (

        <>
            <Navbar></Navbar>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="mx-auto h-10 w-auto"
                        />
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Withdraw
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                    選擇提領幣種
                                </label>
                                <div className="w-72">
                                    <Select
                                        label="Select Version"
                                        value={value}
                                        onChange={(val) => setValue(val)}
                                    >
                                        <Option value="USTD">USTD</Option>
                                        <Option value="USTD">NTD</Option>
                                    </Select>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        提領金額
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        placeholder="1 - 1,000,000"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                   Submit
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm text-gray-500">

                            <Link className='text-blue-700 font-bold' href="/">Back to Lobby</Link>
                        </p>


                    </div>
                </div>

        </>
    )
}

export default Withdraw;
