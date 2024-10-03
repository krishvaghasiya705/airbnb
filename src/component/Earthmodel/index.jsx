import React, { useState, useEffect } from "react";
import "./Earthmodel.scss";
import Crossicon from "../../assets/svg/Crossicon";
import Translationicon from "../../assets/svg/Translationicon";
import Trueicon from "../../assets/svg/Trueicon";

function Earthmodel({ closeModal, isModalOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [activeLanguageIndex, setActiveLanguageIndex] = useState(0);

  const languages = [
    { language: "English", region: "India" },
    { language: "Azərbaycan dili", region: "Azərbaycan" },
    { language: "Bahasa Indonesia", region: "Indonesia" },
    { language: "Bosanski", region: "Bosna i Hercegovina" },
    { language: "Català", region: "Espanya" },
    { language: "Čeština", region: "Česká republika" },
    { language: "Crnogorski", region: "Crna Gora" },
    { language: "Dansk", region: "Danmark" },
    { language: "Deutsch", region: "Deutschland" },
    { language: "Deutsch", region: "Österreich" },
    { language: "Deutsch", region: "Schweiz" },
    { language: "Deutsch", region: "Luxemburg" },
    { language: "Eesti", region: "Eesti" },
    { language: "English", region: "Australia" },
    { language: "English", region: "Canada" },
    { language: "English", region: "Guyana" },
    { language: "English", region: "Ireland" },
    { language: "English", region: "New Zealand" },
    { language: "English", region: "Singapore" },
    { language: "English", region: "United Arab Emirates" },
    { language: "Español", region: "Argentina" },
    { language: "Español", region: "Belice" },
    { language: "Español", region: "Bolivia" },
    { language: "Español", region: "Chile" },
    { language: "Español", region: "Colombia" },
    { language: "Español", region: "Costa Rica" },
    { language: "Español", region: "Ecuador" },
    { language: "Español", region: "El Salvador" },
    { language: "Español", region: "España" },
    { language: "Español", region: "Estados Unidos" },
    { language: "Español", region: "Guatemala" },
    { language: "Español", region: "Honduras" },
    { language: "Español", region: "Latinoamérica" },
    { language: "Español", region: "México" },
    { language: "Español", region: "Nicaragua" },
    { language: "Español", region: "Panamá" },
    { language: "Español", region: "Paraguay" },
    { language: "Español", region: "Perú" },
    { language: "Español", region: "Venezuela" },
    { language: "Français", region: "Belgique" },
    { language: "Français", region: "Canada" },
    { language: "Français", region: "France" },
    { language: "Français", region: "Suisse" },
    { language: "Français", region: "Luxembourg" },
    { language: "Gaeilge", region: "Éire" },
    { language: "Hrvatski", region: "Hrvatska" },
    { language: "isiXhosa", region: "eMzantsi Afrika" },
    { language: "isiZulu", region: "iNingizimu Afrika" },
    { language: "Íslenska", region: "Ísland" },
    { language: "Italiano", region: "Italia" },
    { language: "Italiano", region: "Svizzera" },
    { language: "Kiswahili", region: "Āfrika" },
    { language: "Latviešu", region: "Latvija" },
    { language: "Lietuvių", region: "Lietuva" },
    { language: "Magyar", region: "Magyarország" },
    { language: "Malti", region: "Malta" },
    { language: "Melayu", region: "Malaysia" },
    { language: "Vlaams", region: "België" },
    { language: "Nederlands", region: "Nederland" },
    { language: "Norsk", region: "Norge" },
    { language: "Polski", region: "Polska" },
    { language: "Português", region: "Brasil" },
    { language: "Português", region: "Portugal" },
    { language: "Română", region: "România" },
    { language: "Shqip", region: "Shqipëri" },
    { language: "Slovenčina", region: "Slovensko" },
    { language: "Slovenščina", region: "Slovenija" },
    { language: "Srpski", region: "Srbija" },
    { language: "Suomi", region: "Suomi" },
    { language: "Svenska", region: "Sverige" },
    { language: "Tagalog", region: "Pilipinas" },
    { language: "Bahasa", region: "Indonesia" },
  ];

  useEffect(() => {
    if (isModalOpen) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        closeModal();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing, closeModal]);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleLanguageClick = (index) => {
    setActiveLanguageIndex(index);
  };

  if (!isVisible && !isModalOpen) return null;

  return (
    <div
      className={`earth-model ${
        isModalOpen && !isClosing ? "earth-model-open" : ""
      } ${isClosing ? "earth-model-closing" : ""}`}
    >
      <div
        className={`earth-model-main-background ${
          isModalOpen && !isClosing ? "earth-model-main-background-open" : ""
        } ${isClosing ? "earth-model-main-background-closing" : ""}`}
        onClick={handleClose}
      ></div>
      <div
        className={`earth-model-main ${
          isModalOpen && !isClosing ? "earth-model-main-open" : ""
        } ${isClosing ? "earth-model-main-closing" : ""}`}
      >
        <div className="earth-model-body-main">
          <div className="earth-model-header">
            <div className="earth-model-close-icon" onClick={handleClose}>
              <Crossicon />
            </div>
          </div>
          <div className="earth-model-inner-body-main">
            <div className="earth-model-inner-body-top-line">
              <button
                type="button"
                onClick={() => handleButtonClick(0)}
                className={
                  activeButtonIndex === 0 ? "earth-model-button-active" : ""
                }
              >
                Language and region
              </button>
              <button
                type="button"
                onClick={() => handleButtonClick(1)}
                className={
                  activeButtonIndex === 1 ? "earth-model-button-active" : ""
                }
              >
                Currency
              </button>
            </div>
            <div className="earth-model-inner-body-details">
              <div className="earth-model-inner-body-details-first-box">
                <div>
                  <span>
                    Translation
                    <Translationicon />
                  </span>
                  <p>
                    Automatically translate descriptions and reviews to English.
                  </p>
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
                      activeLanguageIndex === index
                        ? "laguage-box-main-active"
                        : ""
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earthmodel;