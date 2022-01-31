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

  //Changes counter color
  const counterColor = () => {
    if (counterValue >= 100) {
      return "green";
    }
    if (counterValue <= -100) {
      return "red";
    }
    return "";
  };

  return (
    <div>
      <h1 data-testid="header">New Counter</h1>
      <h2 data-testid="counter" className={counterColor()}>
        {counterValue}
      </h2>
      <button data-testid="subtract-btn" onClick={subtractToCounter}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      ></input>
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}
