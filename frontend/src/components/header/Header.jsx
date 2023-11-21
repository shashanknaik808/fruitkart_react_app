import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Header(props) {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        Fruit Kart
                    </Link>
                </h1>
            </div>

            <div className='header-links'>
                <ul>
                    <li>
                        <Link to="/">
                            <i class="fa-solid fa-house-chimney-window" />
                            Home
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/signup">
                            <i class="fa-solid fa-right-to-bracket" />
                            SignUp
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className='cart'>
                            <i class="fa-solid fa-cart-shopping" />
                            <span className='cart-length'>
                                {props.cartItems.length}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header