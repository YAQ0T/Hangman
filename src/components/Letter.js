import React, { Component } from "react";
export default class Letter extends Component {
  selectLetter = () => {
    let flag = 0;
    let score = this.props.score;
    this.props.word.split("").map((w) => {
      if (w === this.props.letter) {
        flag = 1;
      }
    });
    if (flag === 1) {
      if (score !== 100) score += 5;
      if (score >= 100) score = 100;
    } else {
      if (score !== 0) score -= 20;
      if (score <= 0) score = 0;
    }
    flag = 0;
    if (this.props.selectLetter)
      this.props.selectLetter(this.props.letter, score);
  };

  render() {
    return (
      <span onClick={this.selectLetter} className={this.props.className}>
        {this.props.letter}
      </span>
    );
  }
}
