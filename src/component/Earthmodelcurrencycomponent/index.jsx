import React, { useState } from "react";
import { curreny } from "../Earthmodelcurrency";

const Currency = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCurrencyClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="currency-section-main">
      <h5>Choose a currency</h5>
      <div className="choose-language-boxes-main">
        {curreny.map((currencyItem, index) => (
          <div
            key={index}
            className={`laguage-box-main ${
              index === activeIndex ? "laguage-box-main-active" : ""
            }`}
            onClick={() => handleCurrencyClick(index)}
          >
            <div className="laguage-box">
              <p>{currencyItem.currency}</p>
              <span>{currencyItem.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currency;
