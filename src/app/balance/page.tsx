import React from 'react';
import './balance.css';
import {Navbar} from "../../components";
import CircularChart from "../../components/circular-chart";

const Balance = () => {
    return (
        <>
            <Navbar></Navbar>

        <div className="b-container">

            <section className="balance-section">
                <p className="total-balance">Total Balance</p>
                <h2 className="balance-amount">$152.66</h2>
            </section>


            <section className="allocation-section">
                <h3 className="allocation-title">Allocation</h3>
                <CircularChart/>
                <div className="allocation-details">
                    <p className="allocation-item">
                        <span className="dot tetherus"></span> TetherUS 78.96%
                    </p>
                    <p className="allocation-item">
                        <span className="dot aud"></span> Australian Dollar 21.04%
                    </p>
                    <p className="allocation-item">
                        <span className="dot others"></span> Others  0.01%
                    </p>
                </div>
            </section>

            <div className="currency-list">
                <div className="currency-item">
                    <img className="currency-icon" src="/image/currencies/usdt.png" alt="AUD"/>
                    <div className="currency-details">
                        <p className="currency-name">Australian Dollar</p>
                        <p className="currency-amount">A$48.17</p>
                    </div>
                </div>
                <div className="currency-item">
                    <img className="currency-icon" src="/image/currencies/usdt.png" alt="USDT" />
                    <div className="currency-details">
                        <p className="currency-name">TetherUS</p>
                        <p className="currency-amount">$120.53</p>
                    </div>
                </div>
                {/* Add more CurrencyItems here as needed */}
            </div>
        </div></>
    );
};

export default Balance;
