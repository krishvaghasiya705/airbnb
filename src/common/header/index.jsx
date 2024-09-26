import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Mainlogo from "../../assets/svg/Headerlogo";
import EarthIcon from "../../assets/svg/EarthIcon";
import Hemburger from "../../assets/svg/hemburger";

import Profileicon from "../../assets/svg/profileicon.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-header">
          <div className="header-content-alignment-main">
            <div className="header-logo-main">
              <NavLink to={"/"}>
                <Mainlogo />
              </NavLink>
            </div>
            <div className="header-center-links-main">
              <NavLink to={"/"}>Stays</NavLink>
              <NavLink to={"/"}>Experiences</NavLink>
            </div>
            <div className="header-last-content-main">
              <NavLink to={"/"}>Airbnb your home</NavLink>
              <NavLink to={"/"}>
                <EarthIcon />
              </NavLink>
              <div className="header-profile-div-main">
                <Hemburger />
                <img src={Profileicon} alt="Profileicon" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
