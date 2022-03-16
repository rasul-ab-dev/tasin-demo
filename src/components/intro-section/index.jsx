import React from "react";
import classes from "./styles.css";

const IntroSection = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro-body">
          <p className="our-services">Наши Сервисы</p>
          <div className="our-services-wrapper">
            <p className="intro-title">Веб - разработка теперь доступна</p>
            {/* </div> */}
            <div className="intro-offer-wrapper">
              <div className="intro-icon-wrapper">
                <div className="intro-icon">
                  <IntroIcon />
                </div>
                <div>
                  <p className="intro-offer">Решения для бизнеса</p>
                  <p className="intro-offer-item">
                    Мы решаем ваши проблемы с качеством работы
                  </p>
                </div>
              </div>
              <div className="intro-icon-wrapper">
                <div className="intro-icon">
                  <AddIcon />
                </div>
                <div>
                  <p className="intro-offer">Уникальные ресурсы</p>
                  <p className="intro-offer-item">Решения для бизнеса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

function IntroIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <rect width="26" height="26" fill="#fff" rx="7"></rect>
      <path
        stroke="#244B61"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M10.75 12.976V7.75a2.25 2.25 0 014.5 0v.752M15.25 13.001v5.249a2.25 2.25 0 01-4.5 0v-.761"
      ></path>
      <path
        stroke="#244B61"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M13 15.25H7.744A2.247 2.247 0 015.5 13a2.247 2.247 0 012.244-2.25h.752M13 10.75h5.246A2.252 2.252 0 0120.5 13c0 1.243-1.01 2.25-2.254 2.25h-.721"
      ></path>
    </svg>
  );
}

function AddIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      fill="none"
      viewBox="0 0 26 26"
    >
      <rect width="26" height="26" fill="#fff" rx="7"></rect>
      <path
        stroke="#244B61"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M13 19.667a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334z"
      ></path>
      <path
        stroke="#244B61"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.333"
        d="M13 10.333v5.334M10.334 13h5.333"
      ></path>
    </svg>
  );
}
