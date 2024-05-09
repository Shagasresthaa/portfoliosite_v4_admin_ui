import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import LoginTemplate from "./loginTemplate";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static user credentials for testing
    const staticUser = {
      username: "admin",
      password: "admin123",
    };

    if (username === staticUser.username && password === staticUser.password) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <LoginTemplate
      onUsernameChange={handleUsernameChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      username={username}
      password={password}
    />
  );
}

export default Login;
