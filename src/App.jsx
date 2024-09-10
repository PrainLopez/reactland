import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./Title";

export default function App() {
  const spinMapping = ["logo", "logo react"];
  const [spin, setSpin] = useState(1);
  const [count, setCount] = useState(15);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={spinMapping[spin]} alt="React logo" />
        </a>
      </div>
      <h1>Vite & React</h1>
      <Title title="react js"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            setSpin(1 - spin);
          }}
          style={{ backgroundColor: "#555" }}
        >
          switch react light
        </button>
        <p>
          Edit <code>src/App.jsx</code> and <code>src/main.jsx</code> and save
          to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
