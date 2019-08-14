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
            <li className="home"> home </li>
            <li className="profile"> profile </li>
            <li className="projects"> projects </li>
          </ul>
        </div>
        <div className="bottomContent">Hi</div>
      </div>
    );
  }
}

export default Sidebar;
