import React, { Component } from "react";
export default class Letter extends Component {
  letter = "A";

  render() {
    return <span className="show">{this.props.wLetter}</span>;
  }
}
