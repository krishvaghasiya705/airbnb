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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
              delectus perspiciatis illo minima est esse soluta, corporis
              quibusdam adipisci blanditiis suscipit! Veritatis porro sed rerum
              doloribus! Itaque animi perspiciatis amet? Dolore velit, ab
              recusandae facere ipsam, maxime et, similique ad delectus labore
              rem ullam non illum? Delectus aliquid voluptates quas reiciendis
              at ratione quam corrupti laudantium dignissimos ullam! Pariatur,
              dolores. Blanditiis corrupti sint earum delectus excepturi fugiat
              adipisci dolor sequi dolores eligendi temporibus repellat
              officiis, fugit recusandae dolorum similique nihil amet voluptatum
              quasi rerum voluptatibus sapiente reiciendis. Impedit, laboriosam
              maxime. Inventore in ratione veritatis magnam delectus facere
              praesentium voluptas. Porro fugiat quidem quos quod minus optio
              tenetur totam fugit eum, voluptas eveniet ipsam nostrum magnam
              aperiam dignissimos ullam eius laborum. Sequi quasi omnis
              inventore illum fugiat soluta dolor consequatur at dolorem in sit
              repudiandae nihil nulla officia minus maiores architecto, neque
              recusandae qui nisi vel eum facere ipsa iste. Tenetur. Quia
              voluptate magni veritatis. Culpa eveniet voluptatum amet rem
              facilis, voluptas, et sequi quia ex ad voluptatem assumenda cum
              debitis veritatis excepturi placeat porro adipisci, recusandae
              iusto. Natus, fugit alias. Natus nobis magnam incidunt nam at
              corrupti ut cupiditate nesciunt voluptates, libero doloribus,
              explicabo quidem nihil ipsam maiores dolorem architecto beatae
              deleniti rerum illo, quo inventore. Reprehenderit repellendus
              praesentium rem. Mollitia quia labore necessitatibus, totam
              excepturi in sit, nostrum, illum maxime sed ex dolores magni
              perferendis ducimus cumque. Neque rem rerum laborum, quos quaerat
              fugit maiores expedita voluptatum incidunt molestias! Natus
              veritatis soluta totam vitae debitis animi, esse similique optio
              dicta cum adipisci consectetur vero inventore ratione commodi
              dolore molestiae laudantium fuga rerum perspiciatis error. Id
              quidem nostrum incidunt perferendis. Nam blanditiis earum totam.
              Iure maxime quibusdam magnam necessitatibus aut ratione! Quisquam
              neque mollitia eligendi aut voluptate ipsam excepturi aspernatur
              in perspiciatis! Omnis molestias consectetur totam assumenda
              deleniti. Atque, placeat.
            </p>
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
