import React, { Component } from "react";

class Solution extends Component {
  // your code here...
  hint = "TEST";
  render() {
    return (
      <div className="solution">
        <div id="solutionArray">
          <span>_ </span>
          <span>_ </span>
          <span>_ </span>
          <span>_ </span>
        </div>
        <div id="hint">{this.hint}</div>
      </div>
    );
  }
}

export default Solution;
