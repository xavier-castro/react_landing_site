import React from "react";
import ReactDOM from "react-dom";

import Background from "./components/Background/Background";
import Container from "./components/Container/Container";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <Background>
        <Container />
      </Background>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
