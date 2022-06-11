import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App'
import './index.css'

import 'antd/dist/antd.css';
import store from './app/store';

import {TransactionsProvider} from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById('root')).render(
    <TransactionsProvider>
      <React.StrictMode>
        <Router basename={"/CryptoverseWeb3"}>
          <Provider store={store}>
            <App/>
          </Provider>

        </Router>
      </React.StrictMode>
    </TransactionsProvider>
)
