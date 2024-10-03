import React from "react";
import "./homesecondcard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shareicon from "../../../assets/svg/Shareicon";
import Nextslideicon from "../../../assets/svg/Nextslideicon";
import { cardData2 } from "../Homecardsectiontwo";


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Nextslideicon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Nextslideicon />
    </div>
  );
}

function Homesecondcardsection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="locate-cards-section-main-sc">
      <div className="container-header">
        <h1>Past experiences</h1>
        <div className="locate-cards-section">
          {cardData2.map((card, index) => (
            <div className="locate-card" key={index}>
              <div className="locate-card-image-div">
                {card.images.length > 1 ? (
                  <Slider {...settings}>
                    {card.images.map((image, imgIndex) => (
                      <div key={imgIndex}>
                        <img src={image} alt={`image-${imgIndex}`} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  card.images.map((image, imgIndex) => (
                    <img src={image} alt={`image-${imgIndex}`} key={imgIndex} />
                  ))
                )}
                <div className="share-icon-main">
                  <Shareicon />
                </div>
              </div>
              <div className="locate-card-data-div">
                <h3>{card.title}</h3>
                <p>{card.host}</p>
                <span>{card.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homesecondcardsection;
