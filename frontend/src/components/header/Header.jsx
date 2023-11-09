import React from 'react'
import { Link } from 'react-router-dom'

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
                            Home
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/signup">
                            SignUp
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to="/cart" className='cart'>
                            <i className='' />
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