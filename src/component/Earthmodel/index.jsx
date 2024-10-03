import React, { useState, useEffect } from "react";
import "./Earthmodel.scss";
import Crossicon from "../../assets/svg/Crossicon";
import Currency from "../Earthmodelcurrencycomponent";
import LanguageAndRegion from "../EarthmodelLanguagecomponent";

function Earthmodel({ closeModal, isModalOpen }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [activeLanguageIndex, setActiveLanguageIndex] = useState(0);
  const [activeCurrencyIndex, setActiveCurrencyIndex] = useState(0);

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

  const handleCurrencyClick = (index) => {
    setActiveCurrencyIndex(index);
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
            <>
              {activeButtonIndex === 0 && (
                <LanguageAndRegion
                  isOn={isOn}
                  toggleSwitch={toggleSwitch}
                  activeLanguageIndex={activeLanguageIndex}
                  handleLanguageClick={handleLanguageClick}
                />
              )}
              {activeButtonIndex === 1 && (
                <Currency
                  activeCurrencyIndex={activeCurrencyIndex}
                  handleCurrencyClick={handleCurrencyClick}
                />
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earthmodel;