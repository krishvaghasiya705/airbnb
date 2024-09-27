import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./typeslider.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// <-------------------- images -------------------->
import iconsimage1 from "../../assets/icon/1.png";
import iconsimage2 from "../../assets/icon/2.jpg";
import iconsimage3 from "../../assets/icon/3.jpg";
import iconsimage4 from "../../assets/icon/4.jpg";
import iconsimage5 from "../../assets/icon/5.jpg";
import iconsimage6 from "../../assets/icon/6.jpg";
import iconsimage7 from "../../assets/icon/7.jpg";
import iconsimage8 from "../../assets/icon/8.jpg";
import iconsimage9 from "../../assets/icon/9.jpg";
import iconsimage10 from "../../assets/icon/10.jpg";
import iconsimage11 from "../../assets/icon/11.jpg";
import iconsimage12 from "../../assets/icon/12.jpg";
import iconsimage13 from "../../assets/icon/13.jpg";
import iconsimage14 from "../../assets/icon/14.jpg";
import iconsimage15 from "../../assets/icon/15.jpg";
import iconsimage16 from "../../assets/icon/16.jpg";
import iconsimage17 from "../../assets/icon/17.jpg";
import iconsimage18 from "../../assets/icon/18.jpg";
import iconsimage19 from "../../assets/icon/19.jpg";
import iconsimage20 from "../../assets/icon/20.jpg";
import iconsimage21 from "../../assets/icon/21.jpg";
import iconsimage22 from "../../assets/icon/22.jpg";
import iconsimage23 from "../../assets/icon/23.jpg";
import iconsimage24 from "../../assets/icon/24.jpg";
import iconsimage25 from "../../assets/icon/25.jpg";
import iconsimage26 from "../../assets/icon/26.jpg";
import iconsimage27 from "../../assets/icon/27.jpg";
import iconsimage28 from "../../assets/icon/28.jpg";
import iconsimage29 from "../../assets/icon/29.jpg";
import iconsimage30 from "../../assets/icon/30.jpg";
import iconsimage31 from "../../assets/icon/31.jpg";
import iconsimage32 from "../../assets/icon/32.jpg";
import iconsimage33 from "../../assets/icon/33.jpg";
import iconsimage34 from "../../assets/icon/34.jpg";
import iconsimage35 from "../../assets/icon/35.jpg";
import iconsimage36 from "../../assets/icon/36.jpg";
import iconsimage37 from "../../assets/icon/37.jpg";
import iconsimage38 from "../../assets/icon/38.jpg";
import iconsimage39 from "../../assets/icon/39.jpg";
import iconsimage40 from "../../assets/icon/40.jpg";
import iconsimage41 from "../../assets/icon/41.jpg";
import iconsimage42 from "../../assets/icon/42.jpg";
import iconsimage43 from "../../assets/icon/43.jpg";
import iconsimage44 from "../../assets/icon/44.jpg";
import iconsimage45 from "../../assets/icon/45.jpg";
import iconsimage46 from "../../assets/icon/46.jpg";
import iconsimage47 from "../../assets/icon/47.jpg";
import iconsimage48 from "../../assets/icon/48.jpg";
import iconsimage49 from "../../assets/icon/49.jpg";
import iconsimage50 from "../../assets/icon/50.jpg";
import iconsimage51 from "../../assets/icon/51.jpg";
import iconsimage52 from "../../assets/icon/52.jpg";
import iconsimage53 from "../../assets/icon/53.jpg";
import iconsimage54 from "../../assets/icon/54.jpg";
import iconsimage55 from "../../assets/icon/55.jpg";
import iconsimage56 from "../../assets/icon/56.jpg";
import iconsimage57 from "../../assets/icon/57.jpg";
import iconsimage58 from "../../assets/icon/58.jpg";
import iconsimage59 from "../../assets/icon/59.jpg";
import iconsimage60 from "../../assets/icon/60.jpg";
import iconsimage61 from "../../assets/icon/61.jpg";
import iconsimage62 from "../../assets/icon/62.jpg";
import Nexticon from "../../assets/svg/Nexticon";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Nexticon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Nexticon />
    </div>
  );
}

function Typeslider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const iconsData = [
    { id: 1, src: iconsimage1, label: "Icons" },
    { id: 2, src: iconsimage2, label: "Amazing views" },
    { id: 3, src: iconsimage3, label: "Amazing pools" },
    { id: 4, src: iconsimage4, label: "Farms" },
    { id: 5, src: iconsimage5, label: "OMG!" },
    { id: 6, src: iconsimage6, label: "Camping" },
    { id: 7, src: iconsimage7, label: "Luxe" },
    { id: 8, src: iconsimage8, label: "Castle" },
    { id: 9, src: iconsimage9, label: "Beachfront" },
    { id: 10, src: iconsimage10, label: "Cabins" },
    { id: 11, src: iconsimage11, label: "Rooms" },
    { id: 12, src: iconsimage12, label: "Tiny homes" },
    { id: 13, src: iconsimage13, label: "Top of the world" },
    { id: 14, src: iconsimage14, label: "Lakefront" },
    { id: 15, src: iconsimage15, label: "Treehouses" },
    { id: 16, src: iconsimage16, label: "Caves" },
    { id: 17, src: iconsimage17, label: "Top cities" },
    { id: 18, src: iconsimage18, label: "Design" },
    { id: 19, src: iconsimage19, label: "Mansions" },
    { id: 20, src: iconsimage20, label: "Historical homes" },
    { id: 21, src: iconsimage21, label: "Countryside" },
    { id: 22, src: iconsimage22, label: "Bed & breakfasts" },
    { id: 23, src: iconsimage23, label: "New" },
    { id: 24, src: iconsimage24, label: "Islands" },
    { id: 25, src: iconsimage25, label: "Lake" },
    { id: 26, src: iconsimage26, label: "Tropical" },
    { id: 27, src: iconsimage27, label: "Earth homes" },
    { id: 28, src: iconsimage28, label: "Barns" },
    { id: 29, src: iconsimage29, label: "Trending" },
    { id: 30, src: iconsimage30, label: "Domes" },
    { id: 31, src: iconsimage31, label: "Windmills" },
    { id: 32, src: iconsimage32, label: "Off-the-grid" },
    { id: 33, src: iconsimage33, label: "Yurts" },
    { id: 34, src: iconsimage34, label: "Riads" },
    { id: 35, src: iconsimage35, label: "National parks" },
    { id: 36, src: iconsimage36, label: "Boats" },
    { id: 37, src: iconsimage37, label: "Golfing" },
    { id: 38, src: iconsimage38, label: "Houseboats" },
    { id: 39, src: iconsimage39, label: "Arctic" },
    { id: 40, src: iconsimage40, label: "Surfing" },
    { id: 41, src: iconsimage41, label: "A-frames" },
    { id: 42, src: iconsimage42, label: "Camper vans" },
    { id: 43, src: iconsimage43, label: "Vineyards" },
    { id: 44, src: iconsimage44, label: "Hanoks" },
    { id: 45, src: iconsimage45, label: "Skiing" },
    { id: 46, src: iconsimage46, label: "Cycladic homes" },
    { id: 47, src: iconsimage47, label: "Chef's kitchens" },
    { id: 48, src: iconsimage48, label: "Shepherd's huts" },
    { id: 49, src: iconsimage49, label: "Minsus" },
    { id: 50, src: iconsimage50, label: "Casas particulares" },
    { id: 51, src: iconsimage51, label: "Ryokans" },
    { id: 52, src: iconsimage52, label: "Towers" },
    { id: 53, src: iconsimage53, label: "Desert" },
    { id: 54, src: iconsimage54, label: "Adapted" },
    { id: 55, src: iconsimage55, label: "Play" },
    { id: 56, src: iconsimage56, label: "Ski-in/out" },
    { id: 57, src: iconsimage57, label: "Containers" },
    { id: 58, src: iconsimage58, label: "Creative spaces" },
    { id: 59, src: iconsimage59, label: "Grand pianos" },
    { id: 60, src: iconsimage60, label: "Trulli" },
    { id: 61, src: iconsimage61, label: "Dammusi" },
    { id: 62, src: iconsimage62, label: "Beach" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 17,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setActiveIndex(next);
      setIsFirstSlide(next === 0);
      setIsLastSlide(next >= iconsData.length - 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`type-slider-main ${isScrolled ? "type-slider-main-scrolled" : ""}`}>
      <div className="type-slider-rl">
        <div className="container-header">
          <Slider {...settings}>
            {iconsData.map((icon, index) => (
              <div key={icon.id}>
                <div className="type-icons-div-alignment">
                  <div
                    className={`type-icons-div-main ${
                      activeIndex === index ? "type-icons-div-main-active" : ""
                    }`}
                  >
                    <div className="type-icon-div">
                      <div className="icons-image">
                        <img src={icon.src} alt={icon.label} />
                      </div>
                      <span>{icon.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div
          className={`slider-shadow-frst ${
            isFirstSlide ? "Slider-shadow-disabled" : ""
          }`}
        ></div>
        <div
          className={`slider-shadow-scnd ${
            isLastSlide ? "Slider-shadow-disabled" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Typeslider;
