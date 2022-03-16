import React from "react";
import "./styles.css";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <input type="checkbox" id="menu-toogle" />
      <label htmlFor="menu-toogle" className="lines-wrapper">
        <span className="burger-line first"></span>
        <span className="burger-line second"></span>
        <span className="burger-line third"></span>
      </label>
      <div className="mobile-navbar">
        <nav className="mobile-navbar-nav">
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
        <button className="header-button">Связаться с нами</button>
      </div>
    </div>
  );
};

export default BurgerMenu;
