import React, {useState} from 'react';

import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import logo from '../../images/cryptoverseWeb3.png'

const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className={"w-full flex md:justify-center justify-between items-center p-4"}>
            <div className={"md:flex-[0.5] flex-initial justify-center items-center"}>
                <img src={logo} alt="cryptoverseWeb3 logo" className={"w-48 cursor-pointer"}/>
            </div>

            <ul className={"text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"}>
                {/*{["Market", "Crypto News", "Wallets"].map((item, index) => (*/}
                {/*<NavbarItem key={item + index} title={item}/>*/}
                {/*))}*/}

                {[<a href={"https://kabir0x23.github.io/cryptoverse/"}>Market</a>,
                    <a href={"https://kabir0x23.github.io/cryptoverse/"}>Crypto
                        News</a>, "Wallets", "Tutorials"].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))}

                <li className={"bg-[#293050] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#61243a]"}>
                    Login
                </li>
            </ul>
                <div className={"flex relative"}>
                    {toggleMenu
                        ? <AiOutlineClose fontsize={28} className={"text-white md:hidden cursor-pointer"} onClick={() => setToggleMenu(false)}/>
                        : <HiMenuAlt4 fontsize={28} className={"text-white md:hidden cursor-pointer"} onClick={() => setToggleMenu(true)}/>
                    }

                    {toggleMenu && (
                        <ul className={"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"} >
                            <li className={"text-xl w-full my-2"}>
                                <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                            </li>
                            {[<a href={"https://kabir0x23.github.io/cryptoverse/"}>Market</a>,
                                <a href={"https://kabir0x23.github.io/cryptoverse/"}>Crypto
                                    News</a>, "Wallets"].map((item, index) => (
                                <NavbarItem key={item + index} title={item} classProps={"my-2 text-lg"}/>
                            ))}
                        </ul>
                    )}

                </div>
        </nav>
    );
};

export default Navbar;