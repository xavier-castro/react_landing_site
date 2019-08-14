import React from "react";

import "./styles.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebarContainer">
        <div className="topContent">
          <ul>
            <a>
              <li className="avi">Photo here</li>
            </a>
            <li className="email"> email </li>
          </ul>
        </div>
        <div className="middleContent">
          <ul>
            <li>
              <button className="home">HOME</button>
            </li>
            <li>
              <button className="profile">PROFILE</button>
            </li>
            <li>
              <button className="projects">PROJECTS</button>
            </li>
          </ul>
        </div>
        <div className="bottomContent">Hi</div>
      </div>
    );
  }
}

export default Sidebar;
