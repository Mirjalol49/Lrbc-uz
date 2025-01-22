import React from 'react';
import './Header.css';
import Logo from '../../assets/Images/logo.jpg';
const Header = () => {
    return (
        <header className="header">
            <div className="container">
            <div className="header-container">
                <div className='header-wrapper'>
                <a className='header-logo-link' href="#">
                    <img className='header-logo' src={Logo} alt="logo"/>
                </a>
                <nav className="header-nav">
                    <ul className='header-nav-list'>
                        <li className='header-nav-item'><a href="#home">Home</a></li>
                        <li className='header-nav-item'><a href="#about">About</a></li>
                        <li className='header-nav-item'><a href="#services">Services</a></li>
                        <li className='header-nav-item'><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button className='header-btn'>Get Started</button>
                </div>
            </div>
            </div>  
        </header>
    );
};

export default Header;