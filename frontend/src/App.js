import './App.css';
import Header from './components/header/Header';

import Products from './components/products/Products';
import SignUp from './components/signup/SignUp';
import Cart from './components/cart/Cart';
import { useState } from 'react';


function App() {

  const [cartItems, setcartItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        Hello World
      </header>
    </div>
  );
}

export default App;
