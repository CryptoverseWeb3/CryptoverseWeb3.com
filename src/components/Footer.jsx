import React from 'react';
import logo from '../../images/cryptoverseWeb3.png';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className={"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer"}>
            <div className={"w-full flex sm:flex-row flex-col justify-between items-center my-4 "}>
                <div className={"flex flex-[0.3] justify-center items-center"}>
                    <img src={logo} alt="CryptoverseWeb3 logo" className={"w-48"}/>
                </div>
                <div className={"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full navbar-size"}>
                    <Link className={"text-white mr-2"} to='/'>Home</Link>,
                    <Link className={"text-white mr-2"} to='/market'>Market</Link>,
                    <Link className={"text-white mr-2"} to='/cryptocurrencies'>Cryptocurrencies</Link>,
                    <Link className={"text-white mr-2"} to='/news'>News</Link>,
                    <Link className={"text-white mr-2"} to='/'>Wallets</Link>,
                    <Link className={"text-white"} to='/TransactionsHistory'>Transactions History</Link>,
                    <a className={"text-white mr-2"} href='https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1' target={"_blank"}>
                        Tutorials
                    </a>

                </div>

            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className={"text-white text-sm text-center"}> Come join us </p>
                <p className={"text-white text-sm text-center"}>
                    <a className={"text-white"} href="https://www.linktree.com/CryptoverseWeb3"
                       target={"_blank"}> Social links
                    </a>
                </p>
                <p className={"text-white text-sm text-center"}> info@CryptoverseWeb3.com </p>
            </div>

            <div className="sm:w-[90%] w-full h-[1.25px] eth-card m-5 "/>

            <div className={"sm:w-[90%] w-full flex justify-between items-center"}>
                <p className={"text-white text-sm text-center"}>@CryptoverseWeb3 2022</p>
                <p className={"text-white text-sm text-center"}>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;