import {Loader, Navbar, Footer, Welcome, Transactions, Services} from './components'

const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar/>
            <Welcome/>
        </div>
        <Services/>
        <Transactions/>
        <Footer/>
    </div>
  )
}

export default App;
