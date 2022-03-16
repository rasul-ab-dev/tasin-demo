import React from "react";
import Logo from "../../components/logo";
import BurgerMenu from "../../components/burger-menu";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="navbar container">
        <div className="navbar-brand">
          <Logo />
        </div>
        <nav className="navbar-nav">
          <a className="navbar-nav-link" href="#">
            Наши Услуги
          </a>
          <a className="navbar-nav-link" href="#">
            Маркет
          </a>
          <a className="navbar-nav-link" href="#">
            О нас
          </a>
          <a className="navbar-nav-link" href="#">
            Блог
          </a>
        </nav>
        <div className="navbar-btn">
          <div className="navbar-language">RU</div>
          <button className="header-button">Связаться с нами</button>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};
export default Header;
