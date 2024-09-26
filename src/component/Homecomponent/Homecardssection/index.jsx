import React from "react";
import "./homecardsection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shareicon from "../../../assets/svg/Shareicon";

// <-------------------------- images -------------------------->
import Oneimage from "../../../assets/images/1.png";
import twoimage from "../../../assets/images/2.png";
import threeimage from "../../../assets/images/3.1.webp";
import threeoneimage from "../../../assets/images/3.1.webp";
import threetwoimage from "../../../assets/images/3.2.webp";
import threethreeimage from "../../../assets/images/3.3.webp";

// Sample data
const cardData = [
  {
    title: "Stay in Prince’s Purple Rain house",
    host: "Hosted by Wendy and Lisa",
    date: "Coming September",
    images: [Oneimage],
  },
  {
    title: "Join a living room session with Doja",
    host: "Hosted by Doja Cat",
    date: "Coming October",
    images: [twoimage],
  },
  {
    title: "Stay in a beautiful cottage",
    host: "Hosted by John Doe",
    date: "Available Now",
    images: [threeimage, threeoneimage, threetwoimage, threethreeimage],
  },
];

function Homecardsection() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="locate-cards-section-main">
      <div className="container-header">
        <div className="locate-cards-section">
          {cardData.map((card, index) => (
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

export default Homecardsection;
