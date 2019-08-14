import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <div class="sidebar">
          <a class="sidebar" href="#">
            Home
          </a>
          <a href="#">Profile</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>

        <div class="main">...</div>
      </>
    );
  }
}

export default Sidebar;
