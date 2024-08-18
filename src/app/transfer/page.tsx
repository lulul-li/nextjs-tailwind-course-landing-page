'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Navbar } from "../../components";
import './transfer.css';

const Transfer = () => {
    const [value, setValue] = useState("react");
    const [fromCurrency, setFromCurrency] = useState('USDT');
    const [toCurrency, setToCurrency] = useState('BTC');
    const [fromAmount, setFromAmount] = useState('');
    const [toAmount, setToAmount] = useState('');
    const availableAmount = 120.53708561;

    const handleFromAmountChange = (e) => {
        setFromAmount(e.target.value);
        // Example conversion rate
        setToAmount(e.target.value * 0.17);
    };

    const handleMaxClick = () => {
        setFromAmount(availableAmount);
        setToAmount(availableAmount * 0.17); // Adjusted to include conversion rate
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <Navbar />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Transfer
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div className="exchange-form">
                            <div className="exchange-row">
                                <div className="exchange-box">
                                    <div className="currency-label">From</div>
                                    <div className="currency-select">
                                        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                            <option value="USDT">USDT</option>
                                            <option value="TWD">台幣</option>
                                            <option value="EUR">🇪🇺歐元</option>
                                            <option value="GBP">🇬🇧英鎊</option>
                                            <option value="JPY">🇯🇵日圓</option>
                                            <option value="CAD">🇨🇦加元</option>
                                            <option value="CNY">🇨🇳人民幣</option>
                                            <option value="AUD">🇦🇺澳元</option>
                                        </select>
                                    </div>
                                    <div className="amount-input">
                                        <input
                                            type="number"
                                            value={fromAmount}
                                            onChange={handleFromAmountChange}
                                            placeholder="0.01 - 2,500,000"
                                        />
                                        <div className="max-button" onClick={handleMaxClick}>
                                            Max
                                        </div>
                                    </div>
                                    <div className="available-amount">
                                        Available: {availableAmount} {fromCurrency}
                                    </div>
                                </div>
                            </div>
                            <div className="exchange-row">
                                <div className="exchange-box">
                                    <div className="currency-label">To</div>
                                    <div className="currency-select">
                                        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                            <option value="USDT">USDT</option>
                                            <option value="TWD">台幣</option>
                                            <option value="EUR">🇪🇺歐元</option>
                                            <option value="GBP">🇬🇧英鎊</option>
                                            <option value="JPY">🇯🇵日圓</option>
                                            <option value="CAD">🇨🇦加元</option>
                                            <option value="CNY">🇨🇳人民幣</option>
                                            <option value="AUD">🇦🇺澳元</option>
                                        </select>
                                    </div>
                                    <div className="amount-input">
                                        <input
                                            type="number"
                                            value={toAmount}
                                            readOnly
                                            placeholder="0.01 - 2,500,000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
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

export default Transfer;
