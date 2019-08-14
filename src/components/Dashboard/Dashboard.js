import React from "react";

import TopCard from "../TopCard/TopCard";

import "./styles.css";
import computerImage from "../../assets/computer.jpg";
import developImage from "../../assets/develop.jpg";
import exploreImage from "../../assets/explore.jpg";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard effect8">
        <div className="top">
          <div className="threeCardContainer">
            <TopCard
              titleText="Analyze"
              bodyText="Examine and evaluate information to identify relationships and draw conclusions."
              image={computerImage}
            />
            <TopCard
              titleText="Develop"
              bodyText="Create and maintain programs to fulfill objectives and provide a gain in overall quality of life."
              image={developImage}
            />
            <TopCard
              titleText="Explore"
              bodyText="Research and identify new areas of knowledge to continue education and make the world a better place."
              image={exploreImage}
            />
          </div>
        </div>
        <div className="middle" />
        <div className="bottom" />
      </div>
    );
  }
}

export default Dashboard;
