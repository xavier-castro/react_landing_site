import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/Container/Container";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="box">
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
