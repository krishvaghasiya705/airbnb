import React from "react";
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Typeslider() {
  const iconsData = [
    { id: 1, src: iconsimage1, label: "Icons" },
    { id: 2, src: iconsimage2, label: "Amazing views" },
    { id: 3, src: iconsimage3, label: "Icons" },
    { id: 4, src: iconsimage4, label: "Icons" },
    { id: 5, src: iconsimage5, label: "Icons" },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 19,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  return (
    <div className="container-header">
      <Slider {...settings}>
        {iconsData.map((icon) => (
          <div key={icon.id}>
            <div className="type-icons-div-main">
              <div className="type-icon-div">
                <div className="icons-image">
                  <img src={icon.src} alt={icon.label} />
                </div>
                <span>{icon.label}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Typeslider;