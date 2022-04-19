import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { UserProvider } from './components/context/context.components';
import { ShopContextProvider } from './components/context/shop.context';
import { CartContextProvider } from './components/context/cart.context';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ShopContextProvider>
          <CartContextProvider>
            <App/>
          </CartContextProvider>
        </ShopContextProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
