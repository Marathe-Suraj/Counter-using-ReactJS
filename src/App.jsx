import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>count is {count}</h2>
      <div className="card">
        <button
          onClick={() => {
            if (count == 20) {
              setCount(count);
            } else {
              setCount((count) => count + 1);
            }
          }}
        >
          Add Value
        </button>
        <button
          onClick={() => {
            if (count == 0) {
              setCount(count);
            } else {
              setCount((count) => count - 1);
            }
          }}
        >
          Remove Value
        </button>
      </div>
    </>
  );
}

export default App;
