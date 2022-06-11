import React
// ,{ useState}
    from 'react';

import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom';

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
                <Link to='/'>
                    <img src={logo} alt="cryptoverseWeb3 logo" className={"w-48 cursor-pointer"}/>
                </Link>

            </div>

            <ul className={"navbar-size text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"}>
                {/*{["Market", "Crypto News", "Wallets"].map((item, index) => (*/}
                {/*<NavbarItem key={item + index} title={item}/>*/}
                {/*))}*/}

                {[
                    <Link className={"text-white"} to='/'>Home</Link>,
                    <Link className={"text-white"} to='/cryptocurrencies'>Cryptocurrencies</Link>,
                    <Link className={"text-white"} to='/'>Wallets</Link>,
                    <a className={"text-white"} href='https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1' target={"_blank"}>Tutorials</a>
                ].map((item, index) => (
                    <NavbarItem key={item + index} title={item}/>
                ))}

            </ul>
            <div className={"flex relative"}>
                {toggleMenu
                    ? <AiOutlineClose fontsize={28} className={"text-white md:hidden cursor-pointer"}
                                      onClick={() => setToggleMenu(false)}/>
                    : <HiMenuAlt4 fontsize={28} className={"text-white md:hidden cursor-pointer"}
                                  onClick={() => setToggleMenu(true)}/>
                }

                {toggleMenu && (
                    <ul className={"z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"}>
                        <li className={"text-xl w-full my-2"}>
                            <AiOutlineClose onClick={() => setToggleMenu(false)}/>
                        </li>
                        {[
                            <Link className={"text-white"} to='/'>Home</Link>,
                            <Link className={"text-white"} to='/cryptocurrencies'>Cryptocurrencies</Link>,
                            <Link className={"text-white"} to='/'>Wallets</Link>,
                            <a className={"text-white"} href='https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1' target={"_blank"}>Tutorials</a>

                        ].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps={"my-2 text-lg"}/>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default Navbar;