import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./login.css";
import LoginTemplate from "./loginTemplate";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([
    "access_token",
    "role",
    "user_email",
  ]);

  useEffect(() => {
    // Check if cookies are already set
    if (cookies.access_token && cookies.user_email && cookies.role) {
      navigate("/home");
    }
  }, [cookies, navigate]);

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
    let expiry = new Date();

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
        const jwtToken = data["access_token"];
        const role = data["role"];

        expiry.setTime(expiry.getTime() + 15 * 60 * 1000); // Timeout set to 15 mins
        setCookie("user_email", email, { path: "/", expires: expiry });
        setCookie("role", role, { path: "/", expires: expiry });
        setCookie("access_token", jwtToken, { path: "/", expires: expiry });
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
