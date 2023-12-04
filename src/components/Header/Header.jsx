import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/Shop">Shop</a>
            <a href="/Order">Order</a>
            <a href="/Log in">Log in</a>
            <a href="/Inventory">Inventory</a>
            </div>
        </nav>
    );
};

export default Header;