import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}
export default App;
