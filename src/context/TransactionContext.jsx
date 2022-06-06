import React, {useEffect, useState} from "react";
import {ethers} from 'ethers';

import {contractABI, contractAddress} from "../utils/conostants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,
        signer,
        transactionsContract
    })
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState(" ");
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }


    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_accounts'});

            if (accounts.length) {
                setCurrentAccount(accounts[0])

                // getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }

        console.log(accounts);
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");
            const {addressTo, amount, keyword, message} = formData;
            getEthereumContract();
        } catch (error) {
            console.log(error)

            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);


    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}