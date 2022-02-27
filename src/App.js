import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import Counter from "./components/Counter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCountTwo from "./components/HoverCountTwo";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
        <User render={(isLoggedIn) => (isLoggedIn ? "Anant" : "Guest")} />
        <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCountTwo count={count} incrementCount={incrementCount} />
          )}
        />
      </div>
    );
  }
}
export default App;
