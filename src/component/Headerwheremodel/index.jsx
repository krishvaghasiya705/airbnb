import React from "react";
import "./Headerwheremodel.scss";
import { NavLink } from "react-router-dom";
import Closeicon from "../../assets/svg/Closeicon";
import Searchiconsc from "../../assets/svg/Searchiconsc";
import Searchiconthrd from "../../assets/svg/searchiconthrd";

import Dropdownicon from "../../assets/svg/dropdownicon";
import { Modeldata } from "./../modeliconsandata/index";

function Headerwheremodel({ closeModal, isModalOpen }) {
  return (
    <div
      className={`header-where-model-main ${
        isModalOpen ? "header-where-model-main-open" : ""
      }`}
    >
      <div
        className={`header-where-model-header ${
          isModalOpen ? "header-where-model-header-open" : ""
        }`}
      >
        <div className="model-close-button" onClick={closeModal}>
          <Closeicon />
        </div>
        <div className="model-header-data">
          <NavLink to={"/"} className="model-header-link-active">
            Stays
          </NavLink>
          <NavLink to={"/"}>Experiences</NavLink>
        </div>
      </div>
      <div className="header-where-model-body">
        <div
          className={`header-where-model-body-main-content-main ${
            isModalOpen ? "header-where-model-body-main-content-main-open" : ""
          }`}
        >
          <div className="header-where-model-body-main-content">
            <div className="where-model-title-main">
              <h1>Where to?</h1>
            </div>
            <div className="where-model-search-div-main">
              <div className="where-model-search-div">
                <div className="searcicon-input">
                  <Searchiconthrd />
                </div>
                <input type="search" placeholder="Search Destinations" />
              </div>
            </div>
            <div className="where-model-search-main-content">
              <h2>Suggested destinations</h2>
              {Modeldata.map(({ icon, title, label, altdata }, index) => (
                <div
                  className="where-model-search-main-content-box"
                  key={index}
                >
                  <div className="where-model-search-main-content-box-icon">
                    <img src={icon} alt={altdata} />
                  </div>
                  <div>
                    <p>{title}</p>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>

            <button type="button" className="dropdwon-button-main">
              <Dropdownicon />
            </button>
          </div>
        </div>
        <div
          className={`when-div-main ${isModalOpen ? "when-div-main-open" : ""}`}
        >
          <p>When</p>
          <NavLink to={"/"}>Add dates</NavLink>
        </div>
        <div
          className={`who-div-main ${isModalOpen ? "who-div-main-open" : ""}`}
        >
          <p>Who</p>
          <NavLink to={"/"}>Add guests</NavLink>
        </div>
      </div>
      <div
        className={`header-where-model-footer ${
          isModalOpen ? "header-where-model-footer-open" : ""
        }`}
      >
        <span>Clear all</span>
        <button type="button">
          <Searchiconsc />
          Search
        </button>
      </div>
    </div>
  );
}

export default Headerwheremodel;
