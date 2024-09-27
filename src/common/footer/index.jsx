import React, { useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [activeAnchor, setActiveAnchor] = useState("Popular");

  const anchors = [
    "Popular",
    "Arts & culture",
    "Outdoors",
    "Mountains",
    "Beach",
    "Unique stays",
    "Categories",
    "Things to do",
  ];

  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <h2>Inspiration for future getaways</h2>
          <div className="footer-all-anchor-changer-main">
            {anchors.map((anchor) => (
              <div
                key={anchor}
                className={`footer-anchor-one ${
                  activeAnchor === anchor ? "footer-anchor-one-active" : ""
                }`}
                onClick={() => setActiveAnchor(anchor)}
              >
                <span>{anchor}</span>
              </div>
            ))}
          </div>
          <div className="footer-all-anchors-data-main">
            <div className="footer-all-anchors-data-box">
              <p></p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
