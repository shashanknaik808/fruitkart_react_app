import './App.css';
import Header from './components/header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Cart from './components/cart/Cart.jsx';
import { useState } from 'react';


function App() {

  const [cartItems, setcartItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
