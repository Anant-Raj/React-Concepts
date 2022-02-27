import React from "react";

class User extends React.Component {
  render() {
    return <div class="user">{this.props.render()}</div>;
  }
}

export default User;
