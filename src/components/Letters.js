import React, { Component } from "react";
import Letter from "./Letter";
export class Letters extends Component {
  render() {
    return (
      <div className="letter">
        <Letter wLetter={Object.keys(this.props.letters)} />
      </div>
    );
  }
}
