"use client";

import { useState } from "react";

export default function Login(handleLogin) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  // const [userId, setuserId] = useState(id);
  // const [loggedIn, setLoggedIn] = useState(logged);

  return (
    <div>
      <h1>Login</h1>
      {/* {error && <p>{error}</p>} */}
      <form onSubmit={() => handleLogin(e)}>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
