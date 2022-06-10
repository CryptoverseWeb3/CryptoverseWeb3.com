import React, {useEffect, useState} from "react";
import {ethers} from 'ethers';

import {contractABI, contractAddress} from "../utils/conostants";
// import initWasm from "*.wasm";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    return transactionContract;
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState(" ");
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }


    const getAllTransactions = async () => {
        try {
            if (ethereum) {
                const transactionContract = getEthereumContract();
                const availableTransactions = await transactionContract.getAllTransactions();

                const structuredTransactions = availableTransactions.map((transaction) => ({
                    addressTo: transaction.receiver,
                    addressFrom: transaction.sender,
                    timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                    message: transaction.message,
                    keyword: transaction.keyword,
                    amount: parseInt(transaction.amount._hex) / (10 ** 18)
                }));

                console.log(structuredTransactions)

                setTransactions(structuredTransactions);
            } else {
                console.log("Ethereum is not present");
            }
        } catch (error) {
            console.log(error);
        }
    };


    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask.");

            const accounts = await ethereum.request({method: 'eth_accounts'});

            if (accounts.length) {
                setCurrentAccount(accounts[0])

                getAllTransactions();
            } else {
                console.log("No accounts found.");
            }
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    };


    const checkIfTransactionsExist = async () => {
        try {
            if (ethereum) {
                const transactionContract = getEthereumContract();
                const transactionCount = await transactionContract.getTransactionCount();

                window.localStorage.setItem("transactionCount", transactionCount)
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install Metamask.");

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0])
            window.location.reload();
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    };


    const sendTransaction = async () => {
        try {
            if (ethereum) {
                const {addressTo, amount, keyword, message} = formData;
                const transactionsContract = getEthereumContract();
                const parsedAmount = ethers.utils.parseEther(amount);

                await ethereum.request({
                    method: "eth_sendTransaction",
                    params: [{
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208",
                        value: parsedAmount._hex,
                    }],
                });

                const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

                setIsLoading(true);
                console.log(`Loading - ${transactionHash.hash}`);
                await transactionHash.wait();
                console.log(`Success - ${transactionHash.hash}`);
                setIsLoading(false);

                const transactionsCount = await transactionsContract.getTransactionCount();

                setTransactionCount(transactionsCount.toNumber)
                window.location.reload();
            } else {
                console.log("No ethereum object.");
            }
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    }, [transactionCount]);


    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                formData,
                setFormData,
                handleChange,
                sendTransaction,
                transactions,
                transactionCount,
                isLoading,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}