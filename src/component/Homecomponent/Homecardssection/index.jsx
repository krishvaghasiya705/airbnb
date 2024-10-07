import React, { useState, useEffect } from "react";
import "./homecardsection.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shareicon from "../../../assets/svg/Shareicon";
import Nextslideicon from "../../../assets/svg/Nextslideicon";
import { cardData1 } from "../Homecardsectionone";
import Sharemodel from "../../Sharemodel"; // Import Sharemodel component

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
  const [isShareModelOpen, setIsShareModelOpen] = useState(false);
  const [shareData, setShareData] = useState({ title: "", image: "" });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleShareClick = (title, image) => {
    setShareData({ title, image });
    setIsShareModelOpen(true);
  };

  useEffect(() => {
    if (isShareModelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShareModelOpen]);

  return (
    <>
      <div className="locate-cards-section-main">
        <div className="container-header">
          <div className="locate-cards-section">
            {cardData1.map((card, index) => (
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
                  <div
                    className="share-icon-main"
                    onClick={() => handleShareClick(card.title, card.images[0])}
                  >
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
      {isShareModelOpen && (
        <Sharemodel
          title={shareData.title}
          image={shareData.image}
          link="https://air-bnb-in.netlify.app/"
          onClose={() => setIsShareModelOpen(false)}
        />
      )}
    </>
  );
}

export default Homecardsection;