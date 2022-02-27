import React from "react";
const withCounter = (WrappedComponent) => {
  class WrapperCompoent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      const { count } = this.state;
      return (
        <WrappedComponent count={count} incrementCount={this.incrementCount} />
      );
    }
  }
  return WrapperCompoent;
};

export default withCounter;
