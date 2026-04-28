import "./App.css";
//always remember to import your images first
import ironhackLogo from "./assets/ironhack-logo.png";
//install confetti
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  //this is JS-land
  const { width, height } = useWindowSize();
  const pet = {
    name: "Ragnar",
    age: 5,
  };
  function sayHi() {
    console.log("hello");
  }
  return (
    // this is JSX-land
    <article>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={2000}
        colors={["blue", "white"]}
        wind={-0.1}
        gravity={0.1}
      />
      <img alt="ironhack logo" src={ironhackLogo} className="logo" />
      <h1>Hello {pet.name} </h1>

      <p>Goodbye</p>
    </article>
  );
}

export default App;
