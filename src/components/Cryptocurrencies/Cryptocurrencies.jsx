import React, {useState, useEffect} from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card, Row, Col, Input} from 'antd';

import {useGetCryptosQuery} from '../../services/cryptoApi';

import Loader from '../Loader';
import {
    CryptoCardHeader,
    CryptocurrenciesCard,
    CryptocurrenciesImage,
    CryptocurrenciesName,
    SearchContainer
} from "./CryptocurrenciesElements";

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count);

    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm])

    if (isFetching) return <Loader/>;

    return (
        <>
            {!simplified && (
                <SearchContainer placeholder={"Search Cryptocurrency"} onChange={(e) => setSearchTerm(e.target.value)}/>
            )}

            <Row gutter={[32, 32]} className={"crypto-card-container"}>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className={"crypto-card"} key={currency.uuid}>

                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>

                            <CryptocurrenciesCard>
                                <CryptoCardHeader>
                                    <CryptocurrenciesName>{currency.rank}. {currency.name}</CryptocurrenciesName>
                                    <CryptocurrenciesImage className="crypto-image" src={currency.iconUrl} alt={"alt"}/>
                                </CryptoCardHeader>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </CryptocurrenciesCard>

                        </Link>
                    </Col>
                ))}
            </Row>
        </>

    );
};
export default Cryptocurrencies;