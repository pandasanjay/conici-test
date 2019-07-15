import React from "react";
import "./Footer.scss";
import Conichi from "../assets/conichi.png";
import PartnerLogo from "../assets/partner-logo.png";
const Footer = function({ copyright }) {
  return (
    <div>
      <div className="d-flex justify-content-between pt-5">
        <div className="pb-5 pl-5">
          <img src={Conichi} data-selector="conichi-logo" />
        </div>
        <div className="pb-5 pr-5">
          <img src={PartnerLogo} data-selector="partner-logo" />
        </div>
      </div>
      <footer className="navbar navbar-light bg-light sh-footer">
        <div />
        <div className="sh-copy-write p-3">{copyright}</div>
        <div />
      </footer>
    </div>
  );
};

export default Footer;
