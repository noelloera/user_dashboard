import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders a hello header", () => {
  render(<Counter />);
  const headerElement = screen.getByText(/header/i);
  expect(headerElement).toBeInTheDocument();
});
