import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

/*beforeEach(() => {
  render(<Login submit={submit} />);
});*/

it("has username, password and submit fields", () => {
  render(<Login />);
  expect(screen.getByLabelText("username")).toBeInTheDocument();
  expect(screen.getByLabelText("password")).toBeInTheDocument();
  expect(screen.getByText("submit")).toBeInTheDocument();
});

it("should allow user to submit their username and password", () => {
  const submit = jest.fn();
  render(<Login submit={submit} />);
  const usernameField = screen.getByLabelText("username");
  const passwordField = screen.getByLabelText("password");
  const submitButton = screen.getByText("submit");
  userEvent.type(usernameField, "administrator");
  expect(usernameField.value).toBe("administrator");
  userEvent.type(passwordField, "password123");
  expect(passwordField.value).toBe("password123");
  userEvent.click(submitButton);
  expect(submit).toHaveBeenCalledWith({
    username: "administrator",
    password: "password123",
  });
});
