import "./App.css";
import Solution from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import Letter from "./components/Letter";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: { word: "SHACO", hint: "now you see me ,now you don't" },
      score: 100,
    };
  }
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
        <Letters letters={this.state.letterStatus} /> <Letter />
      </div>
    );
  }
}
