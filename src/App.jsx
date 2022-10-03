import {
    Navbar,
    Homepage,
    TransactionsHistory,
    Market,
    Cryptocurrencies,
    CryptoDetails,
    News,
    Footer,
    Blogs,
} from './components'

import './App.css';
import {Route, Routes} from "react-router-dom";

const NewRoutes = ({navTo}) => {
    return (<>
        <div className={"gradient-bg-welcome"}>
            <Navbar/>
        </div>
        <div className="routes">
            {navTo}
        </div>
    </>)
};

const App = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
            </div>
            <div>
                <> <Routes>
                    <Route exact path={"/"} element={
                        <Homepage/>
                    }/>

                    <Route exact path={"/Market"} element={
                        <NewRoutes navTo={<Market/>}/>
                    }/>
                    <Route exact path={"/Cryptocurrencies"} element={
                        <NewRoutes navTo={<Cryptocurrencies/>}/>
                    }/>
                    <Route exact path={"/crypto/:coinId"} element={
                        <NewRoutes navTo={<CryptoDetails/>}/>
                    }/>
                    <Route exact path={"/news"} element={
                        <NewRoutes navTo={<News/>}/>
                    }/>
                    <Route exact path={"/blogs"} element={
                        <NewRoutes navTo={<Blogs/>}/>
                    }/>

                    <Route exact path={"/TransactionsHistory"} element={
                        <div className={"gradient-bg-welcome"}>
                            <Navbar/>
                            <TransactionsHistory/>
                        </div>
                    }/>

                </Routes> </>
            </div>

            <div className={"gradient-bg-footer"}>
                <Footer/>
            </div>
        </div>
    )
}

export default App;