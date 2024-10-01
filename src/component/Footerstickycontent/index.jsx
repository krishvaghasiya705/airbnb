import React, { useEffect, useState } from "react";
import "./footerstickeycontent.scss";
import Exploreicon from "./../../assets/svg/Exploreicon";
import Hearticon from "./../../assets/svg/Hearticon";
import Loginicon from "./../../assets/svg/Loginicon";

function Footerstickycontent() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (isAtBottom) {
        setIsVisible(true);
      } else if (currentScrollY > prevScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const contentItems = [
    { icon: <Exploreicon />, label: "Explore" },
    { icon: <Hearticon />, label: "Wishlists" },
    { icon: <Loginicon />, label: "Log in" },
  ];

  return (
    <div
      className={`footer-sticky-content-main ${
        isVisible
          ? "footer-sticky-content-main-visible"
          : "footer-sticky-content-main-hidden"
      }`}
    >
      {contentItems.map((item, index) => (
        <div
          key={index}
          className={`footer-sticky-content ${
            activeIndex === index ? "footer-sticky-content-active" : ""
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {item.icon}
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Footerstickycontent;
