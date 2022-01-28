import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";
//Expect is inside
import "@testing-library/jest-dom/extend-expect";

let getByTestId;
beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});
it("header renders correct text", () => {
  //assigns correct element based on the id given
  const headerEl = getByTestId("header");
  //checks the content of the text by adding expectation toBe same as string
  expect(headerEl.textContent).toBe("New Counter");
});

test("counter begins at value of 0", () => {
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
});
test("input contains the initial value of 1", () => {
  const inputEl = getByTestId("input");
  expect(inputEl.value).toBe("1");
});
//add + button
test("button renders with +", () => {
  const addBtn = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
});
//add - button
test("button renders with -", () => {
  const subtractBtn = getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
});
//change input value works
test("changing the value of input works", () => {
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
  const btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("1");
});
//Click minus button subtracts 1 to counter
test("clicking minus button subtracts one", () => {
  const btnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("-1");
});
//Adding input value from counter
test("changing input value when clicking add button, adds that amount", () => {
  const inputEl = getByTestId("input");
  const btnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  expect(inputEl.value).toBe("1");
  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });
  fireEvent.click(btnEl);
  expect(inputEl.value).toBe("10");
  expect(counterEl.textContent).toBe("10");
});
//Subtracting input value from counter
test("subtracting input value when clicking subtract button, removes that amount", () => {
  const inputEl = getByTestId("input");
  const btnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  expect(inputEl.value).toBe("5");
  fireEvent.click(btnEl);
  expect(counterEl.textContent).toBe("-5");
});
//Add then subtract the input value
test("adding then subtracting input value produces correct value", () => {
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  const subtactBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.change(inputEl, {
    target: {
      value: "8",
    },
  });
  const times = (x) => (f) => {
    if (x > 0) {
      f();
      times(x - 1)(f);
    }
  };
  expect(inputEl.value).toBe("8");
  times(3)(() => {
    fireEvent.click(addBtnEl);
  });
  expect(counterEl.textContent).toBe("24");
  times(2)(() => {
    fireEvent.click(subtactBtnEl);
  });
  expect(counterEl.textContent).toBe("8");
});
//counter displays correct color on value
test("the correct color is displayed depending on counter value", () => {
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");
  expect(counterEl.className).toBe("");
  fireEvent.change(inputEl, {
    target: {
      value: "100",
    },
  });
  fireEvent.click(addBtnEl);
  //Counter > 100 should turn class green
  expect(counterEl.className).toBe("green");
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  //Counter < -100 should turn class red
  expect(counterEl.className).toBe("red");
});
