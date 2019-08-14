import React from "react";

import TopCard from "../TopCard/TopCard";

import "./styles.css";
import computerImage from "../../assets/computer.jpg";
import developImage from "../../assets/develop.jpg";
import exploreImage from "../../assets/explore.jpg";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="top">
          <div className="threeCardContainer">
            <TopCard
              titleText="Computer"
              bodyText="Yes"
              image={computerImage}
            />
            <TopCard titleText="Develop" bodyText="No" image={developImage} />
            <TopCard titleText="Explore" bodyText="Si" image={exploreImage} />
          </div>
        </div>
        <div className="middle" />
        <div className="bottom" />
      </div>
    );
  }
}

export default Dashboard;
