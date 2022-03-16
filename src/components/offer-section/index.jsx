import React from "react";
import Logo from "../logo";
import "./styles.css";

const OfferSection = () => {
  return (
    <section className="offer">
      <div className="container">
        <div className="offer-logo">
          <Logo />
        </div>
        <div className="offer-text">
          <p className="offer-title">
            Наше индивидуальное предложение для предпринимателей
          </p>
          <p className="offer-subtitle">
            Посмотрите наши работы, что мы предлагаем и решите для себя как
            развивать свой бизнес. Успешно с нами или неизвестно с другими.
          </p>
          <button className="offer-btn">Связаться с нами</button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
