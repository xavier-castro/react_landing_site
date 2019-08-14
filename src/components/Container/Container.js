import React from "react";

import "./styles.scss";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

const Container = () => {
  return (
    <div className="container">
      <div className="sidebarContainer">
        <Sidebar className="bShadow bShadow-1" />
      </div>
      <div className="contentContainer">
        <Dashboard />
      </div>
    </div>
  );
};

export default Container;
