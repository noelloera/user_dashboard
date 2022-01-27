import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
//Expect is inside
import "@testing-library/jest-dom/extend-expect";
//Default component to be rendered
test("header renders correct text", () => {
  //render will render the component in the VDOM and access getByTestId function
  const { getByTestId } = render(<Counter />);
  //assigns correct element based on the id given
  const headerEl = getByTestId("header");
  //checks the content of the text by adding expectation toBe same as string
  expect(headerEl.textContent).toBe("New Counter");
});
//counter
test("counter begins at value of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});
//input
test("input contains the initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});
//add + button
test("button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});
//add - button
test("button renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
});
//change input value works
test("changing the value of input works", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });
  expect(inputEl.value).toBe("10");
});
//Click plus button adds 1 to counter
test("clicking plus button adds one", () => {
  const { getByTestId } = render(<Counter />);
  const btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("1");
});
//Click minus button subtracts 1 to counter
test("clicking minus button subtracts one", () => {
  const { getByTestId } = render(<Counter />);
  const btnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("-1");
});
//Adding value to input changes the increment amount of counter
