import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  return (
    <div>
      <p>{counter}</p>
      <Button
        onClick={() => {
          setCounter(counter - 1);
        }}>
        -
      </Button>
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}>
        +
      </Button>
      <Button
        onClick={() => {
          setHistory([...history, counter]);
        }}>
        Voeg toe
      </Button>

      <ul>
        {history.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
