import "./App.css";
import Solution from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import React, { Component } from "react";
import EndGame from "./components/EndGame";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "SHACO", hint: "Now you see me ,now you don't" },
      score: 100,
    };
  }
  selectLetter = (letter) => {
    let newLetterStatus = { ...this.state.letterStatus };
    newLetterStatus[letter] = true;
    this.setState({ letterStatus: newLetterStatus });
  };
  setNewScore = (score) => {
    this.setState({ score: score });
  };
  generateLetterStatuses() {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  }
  render() {
    return (
      <div className="App">
        <Score score={this.state.score} />
        <Solution
          letterStatus={this.state.letterStatus}
          solution={this.state.solution}
          word={this.state.solution.word}
          hint={this.state.solution.hint}
        />
        <Letters
          score={this.state.score}
          word={this.state.solution.word}
          letters={this.state.letterStatus}
          selectLetter={this.selectLetter}
          setNewScore={this.setNewScore}
        />
        <EndGame
          score={this.state.score}
          word={this.state.solution.word}
          letterStatus={this.state.letterStatus}
        />
      </div>
    );
  }
}
