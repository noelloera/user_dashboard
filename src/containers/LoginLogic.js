import React, { useState } from "react";
import Login from "../components/Login";
import "./Login.css";
const LoginLogic = ({ submit }) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value);
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
    <Login
      submit={handleSubmit}
      change={handleChange}
      username={values.username}
      password={values.password}
    />
  );
};
export default LoginLogic;
