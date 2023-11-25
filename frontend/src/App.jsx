import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';

function App() {

    const [cartItems, setCartItems] = useState([]);

    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Products />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;