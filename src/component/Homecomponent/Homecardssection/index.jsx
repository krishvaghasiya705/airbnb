import React from "react";
import "./homecardsection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shareicon from "../../../assets/svg/Shareicon";
import Nextslideicon from "../../../assets/svg/Nextslideicon";

// <-------------------------- images -------------------------->
import Oneimage from "../../../assets/images/1.png";
import twoimage from "../../../assets/images/2.png";
import threeimage from "../../../assets/images/3.webp";
import threeoneimage from "../../../assets/images/3.1.webp";
import threetwoimage from "../../../assets/images/3.2.webp";
import threethreeimage from "../../../assets/images/3.3.webp";
import fourimage from "../../../assets/images/4.webp";
import fouroneimage from "../../../assets/images/4.1.webp";
import fourtwoimage from "../../../assets/images/4.2.webp";
import fourthreeimage from "../../../assets/images/4.3.webp";
import fiveimage from "../../../assets/images/5.webp";
import fiveoneimage from "../../../assets/images/5.1.jpeg";
import fivetwoimage from "../../../assets/images/5.2.webp";
import fivethreeimage from "../../../assets/images/5.3.jpeg";
import siximage from "../../../assets/images/6.webp";
import sixoneimage from "../../../assets/images/6.1.jpeg";
import sixtwoimage from "../../../assets/images/6.2.webp";
import sixthreeimage from "../../../assets/images/6.3.webp";

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
    title: "Sleepover at Polly Pocket’s Compact",
    host: "Hosted by Polly Pocket",
    date: "Sold out",
    images: [
      threeimage,
      threeoneimage,
      threetwoimage,
      threethreeimage,
      threeimage,
      threeoneimage,
      threetwoimage,
      threethreeimage,
    ],
  },
  {
    title: "Playdate at Polly Pocket’s Compact",
    host: "Hosted by Polly Pocket",
    date: "Sold out",
    images: [
      fourimage,
      fouroneimage,
      fourtwoimage,
      fourthreeimage,
      fourimage,
      fouroneimage,
      fourtwoimage,
      fourthreeimage,
    ],
  },
  {
    title: "Go VIP with Kevin Hart",
    host: "Hosted by Kevin Hart",
    date: "Sold out",
    images: [
      fiveimage,
      fiveoneimage,
      fivetwoimage,
      fivethreeimage,
      fiveimage,
      fiveoneimage,
      fivetwoimage,
      fivethreeimage,
    ],
  },
  {
    title: "Train at the X-Mansion",
    host: "Hosted by Jubilee",
    date: "Sold out",
    images: [
      siximage,
      sixoneimage,
      sixtwoimage,
      sixthreeimage,
      siximage,
      sixoneimage,
      sixtwoimage,
      sixthreeimage,
    ],
  },
];

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

function Homecardsection() {
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
