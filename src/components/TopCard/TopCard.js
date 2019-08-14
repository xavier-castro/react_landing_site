import React from "react";

import "./styles.scss";

const TopCard = ({ image, titleText, bodyText }) => {
  return (
    <div className="fullCardContainer">
      <div className="containerCard">
        <img src={image} />
      </div>
      {/* <div className="imageDescriptionContainer">
        <h2 style={{ textAlign: "center", marginTop: 15 }}>{titleText}</h2>
        <p
          style={{
            textAlign: "left",
            marginTop: 15,
            padding: 5,
            fontSize: 22
          }}
        >
          {bodyText}
        </p>
      </div> */}
    </div>
  );
};

export default TopCard;
