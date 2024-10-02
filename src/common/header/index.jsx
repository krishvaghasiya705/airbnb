import React, { useState, useEffect } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Mainlogo from "../../assets/svg/Headerlogo";
import EarthIcon from "../../assets/svg/EarthIcon";
import Hemburger from "../../assets/svg/hemburger";
import Profileicon from "../../assets/svg/profileicon.svg";
import Searchicon from "../../assets/svg/Searchicon";
import Headerwheremodel from "../../component/Headerwheremodel";
import Typeslider from "../../component/Typeslider";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 577 && isModalOpen) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isModalOpen]);

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
          <div className="header-mobile-search-div" onClick={openModal}>
            <div className="searchicon-div">
              <Searchicon />
            </div>
            <div className="where-to-div-main">
              <p>Where to?</p>
              <div className="where-to-span-main">
                <span>Anywhere</span>
                <span>•</span>
                <span>Any week</span>
                <span>•</span>
                <span>Add guests</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Headerwheremodel isModalOpen={isModalOpen} closeModal={closeModal} />
      <Typeslider />
    </>
  );
};

export default Header;
