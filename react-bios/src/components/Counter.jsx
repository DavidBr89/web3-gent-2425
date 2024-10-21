import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useDarkMode } from "../contexts/DarkModeContext";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);

  // Gebruik maken van de context
  // const darkModeObj = useContext(DarkModeContext);

  // Gebruik makend van onze eigen hook
  const darkModeObj = useDarkMode();

  // Referentie aan een JSX element
  // STAP 1: Nieuwe instantie referentie
  const inputRef = useRef();

  console.log("Counter component is gererenderd!");

  // useEffect

  useEffect(() => {
    console.log("useEffect Type 1");
  });

  useEffect(() => {
    console.log("useEffect Type 2");
  }, []);

  useEffect(() => {
    console.log("useEffect Type 3");
  }, [props.aVar]);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log("Om de 2sec uitgevoerd!");
      setCounter(counter + 1);
    }, 2000);

    // Cleanup van onze useEffect
    return () => {
      clearInterval(timerId);
    };
  }, [counter]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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

      <div>
        <p>Text input</p>
        <input ref={inputRef} type="text" placeholder="Vak" />
      </div>

      <p>Darkmode: {darkModeObj.isDarkMode ? "ja" : "neen"}</p>
    </div>
  );
};

export default Counter;
