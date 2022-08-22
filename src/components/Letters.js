import React, { Component } from "react";
import Letter from "./Letter";
export class Letters extends Component {
  selectLetter = (letter, score) => {
    this.props.selectLetter(letter);
    this.props.setNewScore(score);
  };
  // status={Object.values(this.props.letters)}
  render() {
    return Object.keys(this.props.letters).map((l) => {
      if (this.props.letters[l])
        return (
          <Letter
            score={this.props.score}
            word={this.props.word}
            letter={l}
            className={"hide"}
            key={l}
          />
        );
      else
        return (
          <Letter
            score={this.props.score}
            word={this.props.word}
            letter={l}
            className={"show"}
            selectLetter={this.selectLetter}
            key={l}
          />
        );
    });
  }
}
