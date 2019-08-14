import React from "react";

import SideBarButton from "../Button/SideBarButton";
import "./styles.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebarContainer">
        <div className="topContent">
          <ul>
            <li>
              <img
                className="avi"
                src="https://www.dailydot.com/wp-content/uploads/5b1/92/Screen_Shot_2013-04-12_at_11.53.06_AM.png"
                alt="Me"
                style={{
                  marginBottom: 20,
                  border: "12px double #6569A6"
                }}
              />
            </li>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                letterSpacing: 2
              }}
            >
              <h2>Collin Real</h2>
              <p style={{ textAlign: "center", color: "#E2E2E2" }}>
                <a>collin.real5@gmail.com</a>
              </p>
            </div>
          </ul>
        </div>
        <div className="middleContent">
          <SideBarButton buttonTitle="HOME" />
          <SideBarButton buttonTitle="PROFILE" />
          <SideBarButton buttonTitle="PROJECTS" />
        </div>
        <div className="bottomContent">Hi</div>
      </div>
    );
  }
}

export default Sidebar;
