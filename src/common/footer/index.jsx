import React, { useState } from "react";
import "./footer.scss";
import Dropdownicon from "../../assets/svg/dropdownicon";
import { NavLink } from "react-router-dom";
import EarthIcon from "../../assets/svg/EarthIcon";
import Facebookicon from "../../assets/svg/Facebookicon";
import Twittericon from "../../assets/svg/Twittericon";
import Instagramicon from "../../assets/svg/Instagramicon";

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

  const data = {
    Popular: [
      { city: "Canmore", description: "Flat rentals" },
      { city: "Benalmádena", description: "Beach house rentals" },
      { city: "Marbella", description: "Beach house rentals" },
      { city: "Mijas", description: "House rentals" },
      { city: "Prescott", description: "Cottage rentals" },
      { city: "Scottsdale", description: "Rentals with pools" },
      { city: "Tucson", description: "Apartment rentals" },
      { city: "Jasper", description: "Cabin rentals" },
      { city: "Mountain View", description: "Family-friendly rentals" },
      { city: "Devonport", description: "Cottage rentals" },
      { city: "Mallacoota", description: "Beach house rentals" },
      { city: "Ibiza", description: "Holiday rentals" },
      { city: "Anaheim", description: "Beach house rentals" },
      { city: "Monterey", description: "Apartment rentals" },
      { city: "Paso Robles", description: "Cottage rentals" },
      { city: "Santa Barbara", description: "Cottage rentals" },
      { city: "Sonoma", description: "Cottage rentals" },
    ],
    "Arts & culture": [
      { city: "Phoenix", description: "Rentals with pools" },
      { city: "Hot Springs", description: "Lakehouse pools" },
      { city: "Los Angeles", description: "Apartment rentals" },
      { city: "San Diego", description: "Beach house rentals" },
      { city: "San Francisco", description: "Holiday rentals" },
      { city: "Barcelona", description: "Holiday rentals" },
      { city: "Prague", description: "Holiday rentals" },
      { city: "Washington", description: "Flat rentals" },
      { city: "Keswick", description: "Flat rentals" },
      { city: "London", description: "Flat rentals" },
      { city: "Scarborough", description: "Holiday rentals" },
      { city: "Sherwood Forest", description: "Cabin rentals" },
      { city: "York", description: "Flat rentals" },
      { city: "Paris", description: "House rentals" },
      { city: "Rhodes", description: "House rentals" },
      { city: "Nashville", description: "Holiday rentals" },
      { city: "Dublin", description: "House rentals" },
    ],
    Outdoors: [
      { city: "Lake Martin", description: "Apartment rental" },
      { city: "Banff", description: "Flat rental" },
      { city: "Nerja", description: "Flat rental" },
      { city: "Greer", description: "Cabin rental" },
      { city: "Lake Havasu City", description: "House rental" },
      { city: "Lake Powell", description: "Holiday rental" },
      { city: "North Rim", description: "Holiday rental" },
      { city: "Payson", description: "Holiday rental" },
      { city: "Pinetop-Lakeside", description: "Cabin rental" },
      { city: "Red Rock", description: "Cabin rental" },
      { city: "Dinner Plain", description: "Pet-friendly rentals" },
      { city: "Streaky Bay", description: "Holiday rentals" },
      { city: "Emerald Lake", description: "Cabin rentals" },
      { city: "Vancouver", description: "Apartment rental" },
      { city: "Victoria", description: "House rental" },
      { city: "Idyllwild-Pine Cove", description: "Cabin rental" },
      { city: "Mammoth Lakes", description: "Holiday rental" },
    ],
    Mountains: [
      { city: "Mentone", description: "House rentals" },
      { city: "Sedona", description: "Apartment rentals" },
      { city: "Helen", description: "Cabin rentals" },
      { city: "Pine Moutnain", description: "Holiday rentals" },
      { city: "Stone Moutnain", description: "Cabin rentals" },
      { city: "Island Park", description: "Cabin rentals" },
      { city: "Blue Moutnain", description: "Chalet rentals" },
      { city: "Asheville", description: "Flat rentals" },
      { city: "Blowing Rock", description: "House rentals" },
      { city: "Boone", description: "Holiday rentals" },
      { city: "Hochatown", description: "Holiday rentals" },
      { city: "Pideon Forge", description: "Holiday rentals" },
      { city: "Townsend", description: "Holiday rentals" },
      { city: "Wears Valley", description: "Holiday rentals" },
      { city: "Cabins", description: "Holiday rentals" },
    ],
    Beach: [
      { city: "Anaheim", description: "Beach house rentals" },
      { city: "Anaheim", description: "Beach house rentals" },
    ],
    "Unique stays": [{ city: "Paso Robles", description: "Cottage rentals" }],
    Categories: [{ city: "Sonoma", description: "Cottage rentals" }],
    "Things to do": [],
  };

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
            {data[activeAnchor].length > 0 ? (
              data[activeAnchor].map(({ city, description }) => (
                <div className="footer-all-anchors-data-box" key={city}>
                  <p>{city}</p>
                  <span>{description}</span>
                </div>
              ))
            ) : (
              <p>No data available for this category.</p>
            )}
            {activeAnchor !== "Mountains" && activeAnchor !== "Categories" && (
              <div className="footer-data-extend-div">
                <span>Show more</span>
                <Dropdownicon />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-second-div">
        <div className="container-footer">
          <div className="footer-second-div-first-content">
            <div className="footer-second-div-first-content-box">
              <p>Support</p>
              <NavLink to={"/"}>Help Centre</NavLink>
              <NavLink to={"/"}>AirCover</NavLink>
              <NavLink to={"/"}>Anti-discrimination</NavLink>
              <NavLink to={"/"}>Disability support</NavLink>
              <NavLink to={"/"}>Cancellation options</NavLink>
              <NavLink to={"/"}>Report neighbourhood concern</NavLink>
            </div>
            <div className="footer-second-div-first-content-box">
              <p>Hosting</p>
              <NavLink to={"/"}>Airbnb your home</NavLink>
              <NavLink to={"/"}>AirCover for Hosts</NavLink>
              <NavLink to={"/"}>Hosting resources</NavLink>
              <NavLink to={"/"}>Community forum</NavLink>
              <NavLink to={"/"}>Hosting responsibly</NavLink>
              <NavLink to={"/"}>Join a free Hosting class</NavLink>
            </div>
            <div className="footer-second-div-first-content-box">
              <p>Airbnb</p>
              <NavLink to={"/"}>Newsroom</NavLink>
              <NavLink to={"/"}>New features</NavLink>
              <NavLink to={"/"}>Careers</NavLink>
              <NavLink to={"/"}>Investors</NavLink>
              <NavLink to={"/"}>Airbnb.org emergency stays</NavLink>
            </div>
          </div>
          <div className="footer-second-div-second-content">
            <div className="footer-last-content">
              <p>© 2024 Airbnb, Inc.</p>
              <span>·</span>
              <NavLink to={"/"}>Privacy</NavLink>
              <span>·</span>
              <NavLink to={"/"}>Terms</NavLink>
              <span>·</span>
              <NavLink to={"/"}>Sitemap</NavLink>
              <span>·</span>
              <NavLink to={"/"}>Company details</NavLink>
            </div>
            <div className="footer-second-last-content">
              <div className="earth-icon-link-div">
                <EarthIcon />
                <NavLink to={"/"}>English (IN)</NavLink>
              </div>
              <div className="earth-icon-link-div earth-icon-link-div-sc">
                <NavLink to={"/"}>₹ INR</NavLink>
              </div>
              <div className="footer-social-media-links-main">
                <Facebookicon />
                <Twittericon />
                <Instagramicon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
