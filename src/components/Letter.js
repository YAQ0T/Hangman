import React, { Component } from "react";

export default class Letter extends Component {
  letter = "A";
  render() {
    return <div>{this.letter}</div>;
  }
}
