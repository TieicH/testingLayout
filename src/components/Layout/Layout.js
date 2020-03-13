import React from "react";
import homeImage from "../../assets/desktop/desktop-vcd.svg";
import homeImageMobile from "../../assets/mobile/mobile-vcd.svg";
import "./Layout.scss";

export const Layout = props => {
  return (
    <div className="layoutContainer">
      <div className="bgRed">
        <div className="headLine"></div>
      </div>
      <div className="container">
        <div className="containerContent">
          <div className="layoutHeader">
            <p>Rimac</p>
          </div>
          <div className="layoutContent">
            <div className="leftSide">
              <div className="leftSideContent">
                <p>Seguro de vida</p>
              </div>
              <div className="imageMobileBanner">
                <img src={homeImageMobile}></img>
              </div>
            </div>
            <div className="middleSide">
              <img src={homeImage}></img>
            </div>
            <div className="rigtSide">
              <div className="formularioContainer">Formulario</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
