import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username: "histesh",
    age: 21,
  };

  let price = 100;

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
        Tailwind test
      </h1>
      <Card username='bulkhead' price={(price = 150)} />
      <Card username='RC' price={(price = 170)} />
    </>
  );
}

export default App;
