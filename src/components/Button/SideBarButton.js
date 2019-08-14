import React from "react";

import "./styles.scss";

const SideBarButton = ({ handleOnClick, buttonTitle }) => {
  return (
    <div className="buttonContainer">
      <button className="buttonStyle" onClick={handleOnClick}>
        {buttonTitle}
      </button>
    </div>
  );
};

export default SideBarButton;
