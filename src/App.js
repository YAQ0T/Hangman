import "./App.css";
import Solution from "./components/Solution";
import { Score } from "./components/Score";
import { Letters } from "./components/Letters";
import Letter from "./components/Letter";
function App() {
  return (
    <div className="App">
      <Score />

      <Solution />
      <Letters />
      <Letter />
    </div>
  );
}

export default App;
