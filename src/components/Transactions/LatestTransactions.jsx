import React, {useContext} from 'react';

import {TransactionContext} from "../../context/TransactionContext";
// import dummyData from "../../utils/dummyData";
import useFetch from "../../hooks/useFetch";
import {shortenAddress} from "../../utils/shortenAddress";
import {Link} from "react-router-dom";


const TransactionsCard = ({addressTo, addressFrom, timestamp, message, keyword, amount, url}) => {
    const gifUrl = useFetch({keyword});
    return (
        <div className={"white-glassmorphism  m-4 flex flex-1" +
            "2xl:min-w-[450px]" +
            "2xl:max-w-[500px]" +
            "sm:min-w-[270px]" +
            "sm:max-w-[300px]" +
            "flex-col p-3 rounded-md hover:shadow-2xl"
        }>
             <div className={"flex flex-col items-center w-full mt-3"}>
                <div className={"display-flex w-full mb-6 p-2"}>
                    <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target={"_blank"}
                       rel={"noopener noreferrer"}>
                        <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    </a>
                    <p className={"text-white text-base"}>Amount: {amount} ETH</p>
                    {message && (<>
                        <br/>
                        <p className={"text-white text-base"}>Message: {message}</p>
                    </>)}
                </div>

                <img
                    src={gifUrl || url}
                    alt={"gif"}
                    className={"w-full h-64 2x:h96 rounded-md shadow-lg object-cover"}
                />

                <div className={"bg-black white-glassmorphism  p-3 px-5 w-max rounded-2xl -mt-5 shadow-2xl"}>
                    <p className={"text-[#37a7da] font-bold"}>{timestamp}</p>
                </div>
            </div>
        </div>
    );
}

const LatestTransactions = () => {
    const {connectWallet, currentAccount, transactions} = useContext(TransactionContext);

    return (
        <div className={"flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"}>
            <div className={"flex flex-col md:p-12 py-12 px-4"}>

                {currentAccount ? (
                    transactions.length > 0 && (
                    <h3 className={"text-gradient text-white text-4xl text-center my-2 pt-5"}>
                        10 Latest Transactions
                    </h3>
                    )
                    || transactions.length === 0 && (
                        <h3 className={"text-gray-300 text-3xl text-center my-2 "}>
                            <p onClick={connectWallet} className={"text-gray-300"}>
                                You haven't done any <span className={"text-amber-500"}> transactions </span> yet!
                                <img
                                    className={"eth-logo w-full  h-96 2x:h96 rounded-md shadow-lg object-cover mt-5 "}
                                    src={"https://media3.giphy.com/media/Hx13ouuEzEff1GbcpJ/giphy.gif?cid=790b76116e9aeb1aa06c0af621e73ac96ef317de52d8fdea&rid=giphy.gif&ct=g"}
                                    alt={"transactions-spinner"}
                                />
                            </p>
                        </h3>
                    )

                ) : (

                        <h3 className={"text-gray-300 text-3xl text-center my-2 "}>
                            <a onClick={connectWallet} className={"text-amber-500"}>
                                Connect your account <br/> </a>
                            to see the latest transactions
                            {/*<img*/}
                            {/*    className={"eth-logo w-full  h-96 2x:h96 rounded-md shadow-lg object-cover mt-5 "}*/}
                            {/*    src={"https://media3.giphy.com/media/Hx13ouuEzEff1GbcpJ/giphy.gif?cid=790b76116e9aeb1aa06c0af621e73ac96ef317de52d8fdea&rid=giphy.gif&ct=g"}*/}
                            {/*    alt={"transactions-spinner"}*/}
                            {/*/>*/}
                        </h3>
                )}

                <div className={"flex flex-wrap justify-center items-center mt-5"}>
                    {[
                        // ...dummyData,
                        ...transactions
                    ].reverse().map((transaction, i) => (
                        i < 10 &&
                        <TransactionsCard
                            key={i}
                            {...transaction}
                        />
                    ))}
                </div>

                {currentAccount && transactions.length > 0 ? (
                    <h3 className={"text-white text-3xl text-center my-2 mt-10"}>
                        <Link className={"text-white"} to='/TransactionsHistory'>
                            List All Transactions.
                        </Link>
                    </h3>
                ) : (
                    <></>
                )}
            </div>
        </div>

    );
};

export default LatestTransactions;