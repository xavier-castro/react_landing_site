import React from "react";

import "./styles.scss";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

const Container = () => {
  return (
    <div className="container">
      <div className="sidebarContainer effect4">
        <Sidebar className="effect4" />
      </div>
      <div className="contentContainer effect4">
        <Dashboard />
      </div>
    </div>
  );
};

export default Container;
