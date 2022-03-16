import React from "react";
import AkatMarket from "../../assets/images/Akat-market.png";
import AkatTender from "../../assets/images/Akat-tender.png";
import AkatDelivery from "../../assets/images/Akat-Delivery.png";

import "./styles.css";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-us-text-wrapper">
          <p className="about-us-text">О нас</p>
          <p className="about-us-title">
            Мы Команда Энтузиастов с Крутыми Проектами
          </p>
        </div>
        <div className="about-us-cards-wrapper">
          <div className="about-us-cards">
            <div className="about-us-inner-wrapper">
              <p className="about-us-title">Akat Market</p>
              <p className="about-us-subtitle">
                Akat Market это маркетплейс где все продают покупают товары от
                своих продавцов
              </p>
              <button className="about-us-btn">Посмотреть проект</button>
            </div>
            <img
              className="about-us-img"
              src={AkatMarket}
              alt="Akat-market-img"
            />
          </div>
          <div className="about-us-cards">
            <div className="about-us-inner-wrapper">
              <p className="about-us-title">Akat Tender</p>
              <p className="about-us-subtitle">
                Что обычно видит пользователь, заходя на ваш сайт? И как долго
                он это видит? 75% посетителей уйдут после 10 секунд.
              </p>
              <button className="about-us-btn">Посмотреть проект</button>
            </div>
            <img
              className="about-us-img"
              src={AkatTender}
              alt="Akat-tender-img"
            />
          </div>
          <div className="about-us-cards">
            <div className="about-us-inner-wrapper">
              <p className="about-us-title">Akat Delivery</p>
              <p className="about-us-subtitle">
                Что обычно видит пользователь, заходя на ваш сайт? И как долго
                он это видит? 75% посетителей уйдут после 10 секунд.
              </p>
              <button className="about-us-btn">Посмотреть проект</button>
            </div>
            <img
              className="about-us-img"
              src={AkatDelivery}
              alt="Akat-Delivery-img"
            />
          </div>
          <div className="about-usbtn-wrapper">
            <button className="about-us-last-btn">Смотреть все</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
