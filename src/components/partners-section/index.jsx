import React from "react";
import GreenTree from "../../assets/images/green-tree.png";
import Google from "../../assets/images/google.png";
import BlueBox from "../../assets/images/blue-box.png";
import MetLife from "../../assets/images/Metlife.png";
import Goop from "../../assets/images/goop.png";
import BlueCircle from "../../assets/images/blue-circle.png";
import Componenet from "../../assets/images/Component.png";
import Amazon from "../../assets/images/amazon.png";
import HealthCare from "../../assets/images/Health-Care.png";
import SandS from "../../assets/images/S&S.png";
import FedEx from "../../assets/images/FedEx.png";
import FDS from "../../assets/images/FDS.png";
import WU from "../../assets/images/WU.png";

import "./styles.css";

const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="container">
        <div className="partners-text">
          <p className="partners-title">Наши Клиенты и Партнеры</p>
          <p className="partners-subtitle">
            Клиенты и партнеры которые доверили нам свой бизнес
          </p>
        </div>
        <div className="partners-images-wrapper">
          <div>
            <img src={GreenTree} alt="green-tree.img" />
          </div>
          <div>
            <img src={Google} alt="" />
          </div>
          <div>
            <img src={BlueBox} alt="" />
          </div>
          <div>
            <img src={MetLife} alt="" />
          </div>
          <div>
            <img src={Goop} alt="" />
          </div>
          <div>
            <img src={BlueCircle} alt="" />
          </div>
          <div>
            <img src={Componenet} alt="" />
          </div>
          <div>
            <img src={Amazon} alt="" />
          </div>
          <div>
            <img src={HealthCare} alt="" />
          </div>
          <div>
            <img src={SandS} alt="" />
          </div>
          <div className="fedex-img">
            <img src={FedEx} alt="" />
          </div>
          <div>
            <img src={FDS} alt="" />
          </div>
          <div className="wu-img">
            <img src={WU} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
