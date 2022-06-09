import React from 'react';
import logo from '../../images/cryptoverseWeb3.png';

const Footer = () => {
    return (
        <div className={"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer"}>
            <div className={"w-full flex sm:flex-row flex-col justify-between items-center my-4 "}>
                <div className={"flex flex-[0.5] justify-center items-center"}>
                    <img src={logo} alt="CryptoverseWeb3 logo" className={"w-48"}/>
                </div>
                <div className={"flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full"}>
                    <p className={"text-white text-base text-center mx-2 cursor-pointer"}>Cryptocurrencies</p>
                    <p className={"text-white text-base text-center mx-2 cursor-pointer"}>Crypto News </p>
                    {/*<p className={"text-white text-base text-center mx-2 cursor-pointer"}>Market</p>*/}
                    <p className={"text-white text-base text-center mx-2 cursor-pointer"}>Exchange</p>
                    <p className={"text-white text-base text-center mx-2 cursor-pointer"}>Wallets</p>
                    <p className={"text-white text-base text-center mx-2 cursor-pointer"}>Tutorials</p>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-5">
                <p className={"text-white text-sm text-center"}> Come join us </p>
                <p className={"text-white text-sm text-center"}> info@CryptoverseWeb3.com </p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 m-5 " />
            
            <div className={"sm:w-[90%] w-full flex justify-between items-center"}>
                <p className={"text-white text-sm text-center"}>@CryptoverseWeb3 2022</p>
                <p className={"text-white text-sm text-center"}>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;