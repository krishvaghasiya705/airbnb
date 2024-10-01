import React from "react";
import "./Headerwheremodel.scss";
import { NavLink } from "react-router-dom";
import Closeicon from "../../assets/svg/Closeicon";
import Searchiconsc from "../../assets/svg/Searchiconsc";
import Searchiconthrd from "../../assets/svg/searchiconthrd";

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
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque facere aut eaque a, praesentium voluptatem quam iste dolore ad aperiam placeat, error deleniti ipsa quasi. Dicta tenetur magni cumque?
            Eum, sapiente, quisquam officia saepe eius in harum sit beatae quia perferendis optio exercitationem dicta eveniet quas est laborum vel quod numquam voluptates? Tempora quae laborum, dolorum dolorem iusto quas.
            Quasi inventore dolor exercitationem excepturi qui accusantium eveniet quibusdam impedit quos iste fugiat obcaecati, vitae veniam vero repellendus ipsum sed praesentium beatae? Sit, corrupti ab? Quidem libero eaque quos rerum!
            Fugit illum beatae voluptates asperiores commodi consequuntur repellendus necessitatibus ab nulla dolorem mollitia veniam sit error ducimus iste explicabo exercitationem ipsum nemo amet impedit, enim id libero quibusdam eum. Quia.
            Commodi quisquam, optio officiis error quasi enim quae aliquid? Accusantium nostrum natus suscipit sint sapiente hic cum, libero id at asperiores aperiam quo? Culpa voluptatem assumenda pariatur laudantium, nisi veritatis!
            Vero pariatur libero qui quam eos corporis alias necessitatibus maiores animi esse itaque architecto ratione aperiam molestias velit minus, debitis exercitationem doloribus repudiandae beatae dignissimos repellat. Magnam inventore natus non.
            Minus et laboriosam sed quas. Voluptates alias recusandae, praesentium perspiciatis eos magnam ab mollitia aliquid illo tempore. Corrupti, fugit beatae quia quibusdam saepe voluptatem culpa tenetur praesentium, magni voluptas aliquam.
            Natus et recusandae voluptates harum aperiam earum sunt possimus dolorem animi voluptatum dicta quibusdam voluptas, quam dolor laboriosam atque. Beatae nihil quae exercitationem vero quaerat! Quae perferendis unde laboriosam. Autem.
            Est quis facilis at atque hic earum quisquam in, fugiat esse officiis sapiente aliquam modi unde ad dolorum beatae deserunt! Deleniti laboriosam nulla debitis animi? Debitis incidunt esse autem officia.
            Cupiditate consectetur rem est eos minima veritatis cumque maiores cum enim voluptatibus non dolore exercitationem animi, alias illum quo esse soluta commodi dolor, nesciunt consequuntur maxime possimus ipsa minus? Voluptate?</p>
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
