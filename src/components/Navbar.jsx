import React from "react";

import { RiMenuFoldLine } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";

import logo from "../../images/cryptoverseWeb3.png";

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps} mt-2 navbar-size`}>
      {title}
    </li>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav
      className={
        "w-full flex md:justify-center justify-between items-center p-4"
      }
    >
      <div className={"md:flex-[0.5] flex-initial justify-center items-center"}>
        <Link to="/">
          <img
            src={logo}
            alt="cryptoverseWeb3 logo"
            className={"w-48 cursor-pointer"}
          />
        </Link>
      </div>

      <ul
        className={
          "navbar-size text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
        }
      >
        {[
          <Link className={"text-white"} to="/market">
            Market
          </Link>,
          <Link className={"text-white"} to="/cryptocurrencies">
            Cryptocurrencies
          </Link>,
          <Link className={"text-white"} to="/news">
            Crypto News
          </Link>,
          <Link className={"text-white"} to="/blogs">
            Blogs
          </Link>,
          <Link className={"text-white"} to="/">
            Wallets
          </Link>,
          <Link className={"text-white"} to="/TransactionsHistory">
            Transactions History
          </Link>,
          <a
            className={"text-white"}
            href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1"
            target={"_blank"}
          >
            Tutorials
          </a>,
        ].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
      </ul>

      <div className={"flex relative"}>
        {toggleMenu ? (
          <CgCloseR
            fontsize={28}
            className={"hidden text-white md:hidden sm:hidden cursor-pointer"}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuFoldLine
            fontsize={28}
            className={"text-3xl text-white md:hidden cursor-pointer"}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul
            className={
              "z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            }
          >
            <li className={"text-xl w-full my-2"}>
              <CgCloseR
                className={"bg-gray-800 m-5 text-3xl"}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {[
              <Link className={"text-white"} to="/">
                Home
              </Link>,
              <Link className={"text-white"} to="/market">
                Market
              </Link>,
              <Link className={"text-white"} to="/cryptocurrencies">
                Cryptocurrencies
              </Link>,
              <Link className={"text-white"} to="/news">
                Crypto News
              </Link>,
              <Link className={"text-white"} to="/blogs">
                Blogs
              </Link>,
              <Link className={"text-white"} to="/">
                Wallets
              </Link>,
              <Link className={"text-white"} to="TransactionsHistory">
                Transactions History
              </Link>,
              <a
                className={"text-white"}
                href="https://www.youtube.com/channel/UCu7EGHHiNgEN2228BKD1pqg/?sub_confirmation=1"
                target={"_blank"}
              >
                Tutorials
              </a>,
            ].map((item, index) => (
              <NavbarItem key={item + index} title={item} />
            ))}

            <div className={"mt-5"}>
              <li
                className={
                  "bg-[#ed830e] py-1 px-4 mx-1 rounded-lg cursor-pointer hover:bg-[#f26c3c]"
                }
              >
                <a
                  className={"text-white"}
                  href="https://www.linktree.com/CryptoverseWeb3"
                  target={"_blank"}
                >
                  {" "}
                  Social links
                </a>
              </li>
            </div>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
