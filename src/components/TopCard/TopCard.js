import React from "react";

import "./styles.scss";

const TopCard = ({ image, titleText, bodyText }) => {
  return (
    <div className="fullCardContainer">
      <div className="containerCard">
        <img src={image} />
      </div>
      <div
        className="imageDescriptionContainer"
        style={{ backgroundColor: "orange" }}
      >
        <h2 style={{ backgroundColor: "yellow", textAlign: "center" }}>
          {titleText}
        </h2>
        <p style={{ textAlign: "left" }}>{bodyText}</p>
      </div>
    </div>
  );
};

export default TopCard;
