import React from "react";
import "./styles.css";

const FormSection = () => {
  return (
    <section className="form">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-text">
            <p className="form-title">Понравились наши работы</p>
            <p className="form-subtitle">
              Напишите нам мы поможем вам с вашим проектом
            </p>
          </div>
          <div className="input-wrapper">
            <div className="inner-wrapper">
              <div className="phone-wrapper">
                <p className="input-text">Телефон</p>
                <form action="#" className="phone-form">
                  <input className="input tel" type="tel" />
                </form>
              </div>
              <div className="mail-wrapper">
                <p className="input-text">Email</p>
                <form action="#" className="mail-form">
                  <input className="input mail" type="email" />
                </form>
              </div>
            </div>
            <div className="letter-wrapper">
              <p className="input-text">Ваше письмо</p>
              <form action="#" className="letter-form">
                <input className="input letter" type="text" />
              </form>
              <div className="btn-wrapper">
                <button className="form-btn">Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
