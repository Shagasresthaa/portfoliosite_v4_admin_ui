import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import LoginTemplate from "./loginTemplate";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const baseUrl = process.env.REACT_APP_APP_GATEWAY_URL_BASE;
    const loginUrl = baseUrl + "admin/login";
    console.log(baseUrl);

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login successful!");
        navigate("/home");
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <LoginTemplate
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      email={email}
      password={password}
    />
  );
}

export default Login;
