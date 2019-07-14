import React from "react";
import Icon from "../components/Icon";
import "./Header.scss";
const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-light p-0 sh-navbar pt-4">
      <div className="p-2 ">
        <a className="sh-menu">
          <Icon iconname="menu-bar" />
        </a>
      </div>
      <div className="p-2 ">
        <a className="navbar-brand sh-title" href="#">
          {title}
        </a>
      </div>
      <div className="p-2 ">
        <a className="sh-location">
          <Icon iconname="location-uk" />
        </a>
      </div>
    </nav>
  );
};

export default Header;
