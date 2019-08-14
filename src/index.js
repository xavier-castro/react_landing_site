import React from "react";
import ReactDOM from "react-dom";

import Background from "./components/Background/Background";
import Dashboard from "./components/Dashboard/Dashboard";
import Card from "./components/Card/Card";
import Sidebar from "./components/Sidebar/Sidebar";

import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <section>
        <div>
          <Background>
            <Dashboard />
            <Sidebar />
            <Card />
          </Background>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
