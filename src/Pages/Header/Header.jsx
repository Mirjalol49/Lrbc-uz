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
                    
                        <li className='header-nav-item'><a className='header-link' href="#about">About Us</a></li>
                        <li className='header-nav-item'><a className='header-link' href="#services">Services</a></li>
                        <li className='header-nav-item'><a className='header-link' href="#projects">Projects</a></li>
                        <li className='header-nav-item'><a className='header-link' href="#news">News</a></li>
                        <li className='header-nav-item'><a className='header-link' href="#contact">Contact Us</a></li>
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