import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/Images/logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className='header-wrapper'>
            <a className='header-logo-link' href="#">
              <img className='header-logo' src={Logo} alt="logo"/>
            </a>
            
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
            
            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
              <ul className='header-nav-list'>
                <li className='header-nav-item'><a className='header-link' href="#services">Xizmatlar</a></li>
                <li className='header-nav-item'><a className='header-link' href="#projects">Loyihalar</a></li>
                <li className='header-nav-item'><a className='header-link' href="#news">Yangiliklar</a></li>
                <li className='header-nav-item'><a className='header-link' href="#contact">Bog'lanish</a></li>
              </ul>
              
              {/* Yellow button inside mobile menu */}
              <div className="mobile-btn-container">
                <button className='mobile-header-btn'>+998 94 000 55 99</button>
              </div>
            </nav>
            
            {/* This is the button that will be hidden on mobile */}
            <button className='header-btn'>+998 94 000 55 99</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;