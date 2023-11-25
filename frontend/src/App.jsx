import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';

function App() {

    const [cartItems, setCartItems] = useState([]);

    function handleAddProduct(product) {
        const productExist = cartItems.find(item => {
            return item.id === product.id;
        });

        if (productExist) {
            setCartItems(cartItems.map(item => {
                return item.id === product.id ?
                    { ...productExist, quantity: productExist.quantity + 1 } :
                    item;
            }))
        }
        else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    function handleRemoveProduct(product) {
        const productExist = cartItems.find(item => {
            return item.id === product.id;
        });

        if (productExist.quantity === 1) {
            setCartItems(cartItems.filter(item => {
                return item.id !== product.id;
            }));
        }
        else {
            setCartItems(cartItems.map(item => {
                return item.id === product.id ?
                    { ...productExist, quantity: productExist.quantity - 1 } :
                    item
            }))
        }
    }

    function handleCartClearence() {
        setCartItems([]);
    }


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