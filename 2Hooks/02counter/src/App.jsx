import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    else setCounter(counter);
  };

  const addvalue = () => {
    if (counter <= 19) setCounter(counter + 1);
    else setCounter(counter);
  };
  return (
    <>
      <h1>Hello world</h1>
      <h2>counter vakue: {counter}</h2>
      <button onClick={addvalue}> Add Value</button>
      <br />
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default App;
