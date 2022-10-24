import React from 'react';
import logo from '../../images/cryptoverseWeb3.png';

const Footer = () => {
    return (
        <div className={"w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer"}>
            <div className="sm:w-[90%] w-full h-[1.25px] eth-card m-5 "/>
            <div className={"sm:w-[90%] w-full flex justify-between items-center"}>
                <img src={logo} alt="CryptoverseWeb3 logo" className={"w-48"}/>
                
                <div class="container-fluid">
                <i class="social-icon fa-brands fa-twitter"></i>
                <i class="social-icon fa-brands fa-facebook-f"></i>
                <i class="social-icon fa-brands fa-instagram"></i>
                <i class="social-icon fa-solid fa-envelope"></i>
                </div>
                <p className={"text-white text-sm text-center mr-20"}>@CryptoverseWeb3 2022</p>
                <p className={"text-white text-sm text-center"}>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
