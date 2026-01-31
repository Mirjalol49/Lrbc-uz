import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/Images/logo.jpg';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../../assets/Components/LanguageSwitcher/LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <div className='header-wrapper'>
            <a className='header-logo-link' href="#">
              <img className='header-logo' src={Logo} alt="logo" />
            </a>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
              <ul className='header-nav-list'>
                <li className='header-nav-item'><a className='header-link' href="#services">{t.nav.services}</a></li>
                <li className='header-nav-item'><a className='header-link' href="#projects">{t.nav.projects}</a></li>
                <li className='header-nav-item'><a className='header-link' href="#news">{t.nav.news}</a></li>
                <li className='header-nav-item'><a className='header-link' href="#contact">{t.nav.contact}</a></li>
                <li className='header-nav-item mobile-lang-switcher'>
                  <LanguageSwitcher />
                </li>
              </ul>

              <div className="mobile-btn-container">
                <button className='mobile-header-btn'>+998 94 000 55 99</button>
              </div>
            </nav>

            <div className="header-actions">
              <div className="desktop-lang-switcher">
                <LanguageSwitcher />
              </div>
              <button className='header-btn'>+998 94 000 55 99</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;