import React from "react";
import ReactDOM from "react-dom";

import Background from "./components/Background/Background";
import Dashboard from "./components/Dashboard/Dashboard";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Background>
            <Dashboard />
          </Background>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
