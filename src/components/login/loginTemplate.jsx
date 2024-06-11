import React from "react";

const LoginTemplate = ({
  onEmailChange,
  onPasswordChange,
  onSubmit,
  email,
  password,
}) => (
  <div className="loginContainer">
    <form className="loginForm" onSubmit={onSubmit}>
      <h1 className="loginHeader">Administration Console</h1>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginTemplate;
