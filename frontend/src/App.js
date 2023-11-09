import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';
// import { useState } from 'react';


function App() {

  // const [cartItems, setcartItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={null} />
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
