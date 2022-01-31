import React, { useState } from "react";
import "./Login.css";
const Login = ({ submit }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">username</label>
      <input id="username" onChange={handleChange} value={values.username} />
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        onChange={handleChange}
        value={values.password}
      />
      <button type="submit">submit</button>
    </form>
  );
};
export default Login;
