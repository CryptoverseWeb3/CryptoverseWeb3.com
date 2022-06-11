import {Navbar, Homepage, Cryptocurrencies, CryptoDetails, News, Footer,} from './components'
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
                    <Route exact path={"/cryptocurrencies"} element={
                        <NewRoutes navTo={<Cryptocurrencies/>}/>
                    }/>
                    <Route exact path={"/crypto/:coinId"} element={
                        <NewRoutes navTo={<CryptoDetails/>}/>
                    }/>
                    <Route exact path={"/news"} element={
                        <NewRoutes navTo={<News/>}/>
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