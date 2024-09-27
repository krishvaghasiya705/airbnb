import React from "react";
import "./homesecondcard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Shareicon from "../../../assets/svg/Shareicon";
import Nextslideicon from "../../../assets/svg/Nextslideicon";

// <-------------------------- images -------------------------->
import oneimage from "../../../assets/secondcardsectionimage/one/1.webp";
import oneoneimage from "../../../assets/secondcardsectionimage/one/1.1.webp";
import onetwoimage from "../../../assets/secondcardsectionimage/one/1.2.webp";
import onethreeimage from "../../../assets/secondcardsectionimage/one/1.3.webp";

import twoimage from "../../../assets/secondcardsectionimage/two/2.webp";
import twooneimage from "../../../assets/secondcardsectionimage/two/2.1.webp";
import twotwoimage from "../../../assets/secondcardsectionimage/two/2.2.webp";
import twothreeimage from "../../../assets/secondcardsectionimage/two/2.3.webp";

import threeimage from "../../../assets/secondcardsectionimage/three/3.webp";
import threeoneimage from "../../../assets/secondcardsectionimage/three/3.1.webp";
import threetwoimage from "../../../assets/secondcardsectionimage/three/3.2.webp";
import threethreeimage from "../../../assets/secondcardsectionimage/three/3.3.webp";

import fourimage from "../../../assets/secondcardsectionimage/four/4.webp";
import fouroneimage from "../../../assets/secondcardsectionimage/four/4.1.webp";
import fourtwoimage from "../../../assets/secondcardsectionimage/four/4.2.webp";
import fourthreeimage from "../../../assets/secondcardsectionimage/four/4.3.jpeg";

import fiveimage from "../../../assets/secondcardsectionimage/five/5.jpeg";
import fiveoneimage from "../../../assets/secondcardsectionimage/five/5.1.webp";
import fivetwoimage from "../../../assets/secondcardsectionimage/five/5.2.webp";
import fivethreeimage from "../../../assets/secondcardsectionimage/five/5.3.jpeg";

import siximage from "../../../assets/secondcardsectionimage/six/6.webp";
import sixoneimage from "../../../assets/secondcardsectionimage/six/6.1.webp";
import sixtwoimage from "../../../assets/secondcardsectionimage/six/6.2.webp";
import sixthreeimage from "../../../assets/secondcardsectionimage/six/6.3.webp";

import sevenimage from "../../../assets/secondcardsectionimage/seven/7.webp";
import sevenoneimage from "../../../assets/secondcardsectionimage/seven/7.1.jpeg";
import seventwoimage from "../../../assets/secondcardsectionimage/seven/7.2.jpeg";
import seventhreeimage from "../../../assets/secondcardsectionimage/seven/7.3.jpeg";

import eightimage from "../../../assets/secondcardsectionimage/eight/8.webp";
import eightoneimage from "../../../assets/secondcardsectionimage/eight/8.1.webp";
import eighttwoimage from "../../../assets/secondcardsectionimage/eight/8.2.webp";
import eightthreeimage from "../../../assets/secondcardsectionimage/eight/8.3.webp";

import nineimage from "../../../assets/secondcardsectionimage/nine/9.jfif";
import nineoneimage from "../../../assets/secondcardsectionimage/nine/9.1.jfif";
import ninetwoimage from "../../../assets/secondcardsectionimage/nine/9.2.webp";
import ninethreeimage from "../../../assets/secondcardsectionimage/nine/9.3.webp";

import tenimage from "../../../assets/secondcardsectionimage/ten/10.jpeg";
import tenoneimage from "../../../assets/secondcardsectionimage/ten/10.1.jpeg";
import tentwoimage from "../../../assets/secondcardsectionimage/ten/10.2.jpeg";
import tenthreeimage from "../../../assets/secondcardsectionimage/ten/10.3.jpeg";

import elevenimage from "../../../assets/secondcardsectionimage/eleven/11.jpeg";
import elevenoneimage from "../../../assets/secondcardsectionimage/eleven/11.1.jpeg";
import eleventwoimage from "../../../assets/secondcardsectionimage/eleven/11.2.jpeg";
import eleventhreeimage from "../../../assets/secondcardsectionimage/eleven/11.3.jpeg";

import twelweimage from "../../../assets/secondcardsectionimage/twelewe/12.jpeg";
import twelweoneimage from "../../../assets/secondcardsectionimage/twelewe/12.1.jpeg";
import twelwetwoimage from "../../../assets/secondcardsectionimage/twelewe/12.2.jpeg";
import twelwethreeimage from "../../../assets/secondcardsectionimage/twelewe/12.3.jpeg";

import thirteenimage from "../../../assets/secondcardsectionimage/thirteen/13.jpeg";
import thirteenoneimage from "../../../assets/secondcardsectionimage/thirteen/13.1.jpeg";
import thirteentwoimage from "../../../assets/secondcardsectionimage/thirteen/13.2.jpeg";
import thirteenthreeimage from "../../../assets/secondcardsectionimage/thirteen/13.3.jpeg";

import fourteenimage from "../../../assets/secondcardsectionimage/fourteen/14.jpeg";
import fourteenoneimage from "../../../assets/secondcardsectionimage/fourteen/14.1.jpeg";
import fourteentwoimage from "../../../assets/secondcardsectionimage/fourteen/14.2.jpeg";
import fourteenthreeimage from "../../../assets/secondcardsectionimage/fourteen/14.3.jpeg";

import fifthteenimage from "../../../assets/secondcardsectionimage/fifthteen/15.jpeg";
import fifthteenoneimage from "../../../assets/secondcardsectionimage/fifthteen/15.1.jpeg";
import fifthteentwoimage from "../../../assets/secondcardsectionimage/fifthteen/15.2.jpeg";
import fifthteenthreeimage from "../../../assets/secondcardsectionimage/fifthteen/15.3.jpeg";

import sixteenimage from "../../../assets/secondcardsectionimage/sixteen/16.jpg";
import sixteenoneimage from "../../../assets/secondcardsectionimage/sixteen/16.1.jpg";
import sixteentwoimage from "../../../assets/secondcardsectionimage/sixteen/16.2.jpg";
import sixteenthreeimage from "../../../assets/secondcardsectionimage/sixteen/16.3.jpeg";

// Sample data
const cardData = [
  {
    title: "Live like Bollywood star Janhvi Kapoor",
    host: "Hosted by Janhvi Kapoor",
    date: "Sold out",
    images: [
      oneimage,
      oneoneimage,
      onetwoimage,
      onethreeimage,
      oneimage,
      oneoneimage,
      onetwoimage,
      onethreeimage,
    ],
  },
  {
    title: "Open the Olympic Games at Musée d’Orsay",
    host: "Hosted by Mathieu Lehanneur",
    date: "Sold out",
    images: [
      twoimage,
      twooneimage,
      twotwoimage,
      twothreeimage,
      twoimage,
      twooneimage,
      twotwoimage,
      twothreeimage,
    ],
  },
  {
    title: "Wake up in the Musée d’Orsay",
    host: "Hosted by Mathieu Lehanneur",
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
    title: "Make core memories with Inside Out 2",
    host: "Hosted by Joy",
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
    title: "Design your Incredibles Supersuit",
    host: "Hosted by Edna Mode",
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
    title: "Go on tour with Feid",
    host: "Hosted by Feid",
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
  {
    title: "Game with Khaby Lame",
    host: "Hosted by Khaby Lame",
    date: "Sold out",
    images: [
      sevenimage,
      sevenoneimage,
      seventwoimage,
      seventhreeimage,
      sevenimage,
      sevenoneimage,
      seventwoimage,
      seventhreeimage,
    ],
  },
  {
    title: "Crash at the X-Mansion",
    host: "Hosted by Jubilee",
    date: "Sold out",
    images: [
      eightimage,
      eightoneimage,
      eighttwoimage,
      eightthreeimage,
      eightimage,
      eightoneimage,
      eighttwoimage,
      eightthreeimage,
    ],
  },
  {
    title: "Spend the night in the Ferrari Museum",
    host: "Hosted by Marc Gené",
    date: "Sold out",
    images: [
      nineimage,
      nineoneimage,
      ninetwoimage,
      ninethreeimage,
      nineimage,
      nineoneimage,
      ninetwoimage,
      ninethreeimage,
    ],
  },
  {
    title: "Drift off in the Up house",
    host: "Hosted by Carl Fredricksen",
    date: "Sold out",
    images: [
      tenimage,
      tenoneimage,
      tentwoimage,
      tenthreeimage,
      tenimage,
      tenoneimage,
      tentwoimage,
      tenthreeimage,
    ],
  },
  {
    title: "Whrek's Swamp",
    host: "Hosted by Donkey",
    date: "Sold out",
    images: [
      elevenimage,
      elevenoneimage,
      eleventwoimage,
      eleventhreeimage,
      elevenimage,
      elevenoneimage,
      eleventwoimage,
      eleventhreeimage,
    ],
  },
  {
    title: "Barbie’s Malibu DreamHouse, Ken’s Way",
    host: "Hosted by Ken",
    date: "Sold out",
    images: [
      twelweimage,
      twelweoneimage,
      twelwetwoimage,
      twelwethreeimage,
      twelweimage,
      twelweoneimage,
      twelwetwoimage,
      twelwethreeimage,
    ],
  },
  {
    title: "Ted Lesso's Favorite Pub",
    host: "Hosted by Mae",
    date: "Sold out",
    images: [
      thirteenimage,
      thirteenoneimage,
      thirteentwoimage,
      thirteenthreeimage,
      thirteenimage,
      thirteenoneimage,
      thirteentwoimage,
      thirteenthreeimage,
    ],
  },
  {
    title: "Houseplant Retreat",
    host: "Hosted by Seth Rogen",
    date: "Sold out",
    images: [
      fourteenimage,
      fourteenoneimage,
      fourteentwoimage,
      fourteenthreeimage,
      fourteenimage,
      fourteenoneimage,
      fourteentwoimage,
      fourteenthreeimage,
    ],
  },
  {
    title: "Home Alone Holiday",
    host: "Hosted by Buzz",
    date: "Sold out",
    images: [
      fifthteenimage,
      fifthteenoneimage,
      fifthteentwoimage,
      fifthteenthreeimage,
      fifthteenimage,
      fifthteenoneimage,
      fifthteentwoimage,
      fifthteenthreeimage,
    ],
  },
  {
    title: "The Last Blockbuster",
    host: "Hosted by Sandi",
    date: "Sold out",
    images: [
      sixteenimage,
      sixteenoneimage,
      sixteentwoimage,
      sixteenthreeimage,
      sixteenimage,
      sixteenoneimage,
      sixteentwoimage,
      sixteenthreeimage,
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

export default Homesecondcardsection;
