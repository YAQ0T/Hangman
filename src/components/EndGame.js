import React, { Component } from "react";

export default class EndGame extends Component {
  render() {
    let flag = 0;

    this.props.word.split("").map((w) => {
      this.props.letterStatus[w] ? (flag = 1) : (flag = 0);
    });

    return flag ? (
      <div>Congratulations</div>
    ) : this.props.score <= 0 ? (
      <div>{this.props.word}</div>
    ) : (
      <div>Try Hard</div>
    );
  }
}
