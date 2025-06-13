import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name } = this.props; // Access props via this.props
    return (
      <div>
        <h1>Hello, {name}</h1>
      </div>
    );
  }
}

export default Welcome;
