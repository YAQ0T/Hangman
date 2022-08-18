import React, { Component } from "react";
export class Score extends Component {
  scoreNumber = 100;
  render() {
    return <div className="Score">{this.props.score}</div>;
  }
}
