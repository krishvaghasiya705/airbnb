import React from "react";
import Translationicon from "../../assets/svg/Translationicon";
import Trueicon from "../../assets/svg/Trueicon";
import { languages } from "../Earthmodellanguage";

const LanguageAndRegion = ({
  isOn,
  toggleSwitch,
  activeLanguageIndex,
  handleLanguageClick,
}) => {
  return (
    <>
      <div className="earth-model-inner-body-details">
        <div className="earth-model-inner-body-details-first-box">
          <div>
            <span>
              Translation
              <Translationicon />
            </span>
            <p>Automatically translate descriptions and reviews to English.</p>
          </div>
          <div>
            <div className="switch-container" onClick={toggleSwitch}>
              <div className={`switch ${isOn ? "switch-on" : ""}`}>
                <div className="switch-circle">
                  {isOn && (
                    <span className="icon-true">
                      <Trueicon />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestion-box-main">
        <h3>Suggested languages and regions</h3>
        <div className="suggested-laguage-box-main">
          <div className="suggested-laguage-box">
            <div className="suggested-laguage-box-inner">
              <p>English</p>
              <span>United States</span>
            </div>
          </div>
          <div className="suggested-laguage-box">
            <div className="suggested-laguage-box-inner">
              <p>English</p>
              <span>United Kingdom</span>
            </div>
          </div>
          <div className="suggested-laguage-box">
            <div className="suggested-laguage-box-inner">
              <p>हिन्दी</p>
              <span>भारत</span>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-language-section-main">
        <h4>Choose a language and region</h4>
        <div className="choose-language-boxes-main">
          {languages.map((languageItem, index) => (
            <div
              key={index}
              className={`laguage-box-main ${
                activeLanguageIndex === index ? "laguage-box-main-active" : ""
              }`}
              onClick={() => handleLanguageClick(index)}
            >
              <div className="laguage-box">
                <p>{languageItem.language}</p>
                <span>{languageItem.region}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LanguageAndRegion;