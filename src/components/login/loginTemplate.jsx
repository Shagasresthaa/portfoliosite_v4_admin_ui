import React from "react";

const LoginTemplate = ({
  onUsernameChange,
  onPasswordChange,
  onSubmit,
  username,
  password,
}) => (
  <div className="loginContainer">
    <form className="loginForm" onSubmit={onSubmit}>
      <h1 className="loginHeader">Administration Console</h1>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
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
