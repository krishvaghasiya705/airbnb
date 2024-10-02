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
import Earthmodel from "../../component/Earthmodel";

const Header = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isEarthModalOpen, setIsEarthModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const openEarthModal = () => {
    if (window.innerWidth >= 576) {
      setIsEarthModalOpen(true);
      setIsActive(true);
    }
  };

  const closeEarthModal = () => {
    setIsEarthModalOpen(false);
    setIsActive(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 577 && (isSearchModalOpen || isEarthModalOpen)) {
      closeSearchModal();
      closeEarthModal();
    }
  };

  useEffect(() => {
    if (isSearchModalOpen || isEarthModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [isSearchModalOpen, isEarthModalOpen]);

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
              <NavLink to={"/second"}>Experiences</NavLink>
            </div>
            <div className="header-last-content-main">
              <NavLink to={"/"}>Airbnb your home</NavLink>
              <NavLink
                to={"#"}
                onClick={isEarthModalOpen ? closeEarthModal : openEarthModal}
                className={isActive ? "earth-icon-active" : ""}
              >
                <EarthIcon />
              </NavLink>

              <div className="header-profile-div-main">
                <Hemburger />
                <img src={Profileicon} alt="Profileicon" />
              </div>
            </div>
          </div>
          <div className="header-mobile-search-div" onClick={openSearchModal}>
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
      <Headerwheremodel
        isModalOpen={isSearchModalOpen}
        closeModal={closeSearchModal}
      />
      <Earthmodel isModalOpen={isEarthModalOpen} closeModal={closeEarthModal} />
      <Typeslider />
    </>
  );
};

export default Header;
