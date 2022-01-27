import react from "react";
import { useState } from "react";
import "./Counter.css";
export default function Counter(props) {
  //Holds state for the count
  const [counterValue, setCounterValue] = useState(0);
  //Holds value of input value
  const [inputValue, setInputValue] = useState(1);
  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };
  const subtractToCounter = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div>
      <h1 data-testid="header">New Counter</h1>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn" onClick={subtractToCounter}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}
