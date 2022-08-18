import React, { Component } from "react";
import Letter from "./Letter";
class Solution extends Component {
  // your code here...
  hint = "TEST";
  render() {
    return (
      <div className="solution">
        <div id="solutionArray">
          {this.props.word.split("").map((w) => (
            <Letter
              wLetter={this.props.letterStatus[w] ? w + " " : "_ "}
              key={w}
            />
          ))}
        </div>
        <div id="hint">{this.props.hint}</div>
      </div>
    );
  }
}

export default Solution;
