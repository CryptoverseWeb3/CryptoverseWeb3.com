import React from 'react';
import {Navbar, Services, Transactions, Welcome} from "./index";

const Homepage = () => {
    return (
        <>
            <div className={"gradient-bg-welcome"}>
                <Navbar/>
                <Welcome/>
            </div>
            <Services/>
            <Transactions/>
        </>
    );
};

export default Homepage;