/* eslint-disable react/no-unescaped-entities */
import "./Footer.css";
import FooterBg from "../../assets/Images/footer-bg.webp";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top-wrapper">
          <a className="footer-logo" href="https://www.lrbc.uz/">
            LRBC
          </a>

          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-nav-link" href="#services">
                {t.nav.services}
              </a>
            </li>
            <li className="footer-item">
              <a className="footer-nav-link" href="#projects">
                {t.nav.projects}
              </a>
            </li>

            <li className="footer-item">
              <a className="footer-nav-link" href="#contact">
                {t.footer.connect}
              </a>
            </li>
          </ul>

          <a className="footer-tel" href="tel:+998332334000">
            +99894 000 55 99
          </a>
        </div>
        <div className="footer-owner">
          © 2025-
          <a href="https://t.me/mirjalol_shamsiddinov" target="blank">
            Mirjalol Shamsiddinov
          </a>
        </div>
      </div>
      <div className="footer-bg">
        <img className="footer-img" src={FooterBg} alt="footer background" />
      </div>
    </footer>
  );
};

export default Footer;