import React from "react";
import "./Headerwheremodel.scss";
import { NavLink } from "react-router-dom";
import Closeicon from "../../assets/svg/Closeicon";
import Searchiconsc from "../../assets/svg/Searchiconsc";

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
          className={`header-where-model-body-main-content ${
            isModalOpen ? "header-where-model-body-main-content-open" : ""
          }`}
        >
          <h1>Where to?</h1>
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
